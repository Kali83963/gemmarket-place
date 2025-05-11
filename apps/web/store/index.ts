import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./slices/authSlice";
import { authApi } from "./slices/authApi";
import { gemstoneApi } from "./slices/gemstoneApi";
import cartReducer from "./slices/cartSlice";

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  [authApi.reducerPath]: authApi.reducer,
  [gemstoneApi.reducerPath]: gemstoneApi.reducer,
});

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only auth will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, gemstoneApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

// Create the persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// First, let's define the FileWithPreview type
type FileWithPreview = File & {
  preview: string;
};

// Update the uploadFile function
const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  
  // Get the file extension
  const fileExtension = file.name.split('.').pop()?.toLowerCase();
  // Create a unique filename with timestamp and original extension
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;
  
  // Append the original file directly to FormData
  formData.append('file', file, fileName);

  try {
    console.log('Uploading file:', {
      name: fileName,
      type: file.type,
      size: file.size,
      extension: fileExtension
    });

    const response = await fetch('http://localhost:5000/uploads', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Upload failed with response:', errorText);
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Upload response:', data); // Add this to debug the response

    if (!data.fileUrl) {
      throw new Error('No URL returned from upload');
    }

    return data.fileUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Update the onSubmit function
const onSubmit = async (data: GemstoneFormData) => {
  console.log("Form submitted with data:", data);
  
  try {
    // Upload all images first
    console.log("Uploading images:", imageFiles);
    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        console.log("Uploading image:", {
          name: file.name,
          type: file.type,
          size: file.size
        });
        // Pass the original file directly
        return await uploadFile(file);
      })
    );
    console.log("Image URLs received:", imageUrls);

    // Upload certificates
    console.log("Uploading certificates:", certificateFiles);
    const certificateUrls = await Promise.all(
      certificateFiles.map(async (file) => {
        console.log("Uploading certificate:", {
          name: file.name,
          type: file.type,
          size: file.size
        });
        // Pass the original file directly
        return await uploadFile(file);
      })
    );
    console.log("Certificate URLs received:", certificateUrls);

    // Format the data according to the API requirements
    const formattedData = {
      title: data.title,
      gemstoneType: data.gemstoneType,
      shape: data.shape,
      description: data.description,
      carat: data.carat,
      dimensions: data.dimensions,
      certification: data.certification,
      color: data.color,
      clarity: data.clarity,
      cut: data.cut,
      polish: data.polish || "Excellent",
      symmetry: data.symmetry || "Good",
      fluorescence: data.fluorescence || "None",
      colorHue: data.colorHue || "",
      transparency: data.transparency || "Transparent",
      colorSaturation: data.colorSaturation || "Medium",
      additionalSpecs: data.additionalSpecs || "",
      price: data.price,
      origin: data.origin,
      certificationDocument: certificateUrls[0] || "",
      certificationStatus: true,
      sellerId: auth.user?.id || 0,
      quantity: data.quantity,
      sku: data.sku || `GEM-${Math.floor(Math.random() * 10000)}`,
      allowOffers: data.allowOffers,
      showComparePriceLabel: data.showComparePriceLabel,
      chargeShipping: data.chargeShipping,
      featured: data.featured,
      listingStatus: data.listingStatus || "active",
      images: imageUrls
    };

    console.log("Formatted data for API:", formattedData);

    // Now you can send this formatted data to your API
    const response = await createGemstone(formattedData).unwrap();
    console.log("API Response:", response);

  } catch (error) {
    console.error('Error in form submission:', error);
  }
};
