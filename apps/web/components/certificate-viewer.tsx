import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, FileText } from "lucide-react";

interface CertificateViewerProps {
  documentUrl: string | null;
  certificateType: string;
  gemstoneName: string;
}

export function CertificateViewer({
  documentUrl,
  certificateType,
  gemstoneName,
}: CertificateViewerProps) {
  return (
    <div className="relative aspect-[5/1] overflow-hidden rounded-lg border bg-gray-50">
      {documentUrl ? (
        <>
          <div className="flex h-full items-center justify-center md:flex-row flex-col">
            <div className="text-center">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Certificate Document</p>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="absolute bottom-4 right-4 gap-2"
              >
                <Eye className="h-4 w-4" />
                View Certificate
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Certificate Document</DialogTitle>
                <DialogDescription>
                  {certificateType} Certificate for {gemstoneName}
                </DialogDescription>
              </DialogHeader>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-50">
                <iframe
                  src={documentUrl}
                  className="h-full w-full"
                  title="Certificate Document"
                />
              </div>
            </DialogContent>
          </Dialog>
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-500">No certificate document available</p>
        </div>
      )}
    </div>
  );
} 