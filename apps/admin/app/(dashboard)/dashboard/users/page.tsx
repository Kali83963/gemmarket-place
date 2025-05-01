"use client";

import * as React from "react";

// material-ui
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

// project-imports

import { dispatch, useSelector } from "store";
import { getDetailCards } from "store/slices/user";

// types
import { UserProfile } from "types/user-profile";
import MainCard from "@/components/cards/MainCard";
import CustomTable from "@/components/table/Table";
import CustomDrawer from "@/components/drawer/Drawer";
import UserDetails from "@/components/users/UserDetails";
import UserFilter from "@/components/users/UserFilter";
import { TableProvider } from "@/contexts/TableContext";
import GenericTable from "@/components/table/GenericTable";
import UserTableHeader from "@/components/users/table/UserTableHeaders";
import UserRows from "@/components/users/table/UserRow";

const usersData = [
  {
    id: 1,
    firstName: "Cully",
    lastName: "Volonte",
    email: "cvolonte0@paginegialle.it",
    role: "SELLER",
  },
  {
    id: 2,
    firstName: "Kelley",
    lastName: "Blemings",
    email: "kblemings1@weather.com",
    role: "BUYER",
  },
  {
    id: 3,
    firstName: "Lora",
    lastName: "O'Giany",
    email: "logiany2@tamu.edu",
    role: "SELLER",
  },
  {
    id: 4,
    firstName: "Cherlyn",
    lastName: "Pavlenko",
    email: "cpavlenko3@wiley.com",
    role: "SELLER",
  },
  {
    id: 5,
    firstName: "Evelin",
    lastName: "Grestye",
    email: "egrestye4@disqus.com",
    role: "SELLER",
  },
  {
    id: 6,
    firstName: "Violette",
    lastName: "Yarwood",
    email: "vyarwood5@nytimes.com",
    role: "SELLER",
  },
  {
    id: 7,
    firstName: "Crystal",
    lastName: "Twinterman",
    email: "ctwinterman6@va.gov",
    role: "BUYER",
  },
  {
    id: 8,
    firstName: "Betsy",
    lastName: "Wibrew",
    email: "bwibrew7@example.com",
    role: "BUYER",
  },
  {
    id: 9,
    firstName: "Gottfried",
    lastName: "Bathurst",
    email: "gbathurst8@sun.com",
    role: "BUYER",
  },
  {
    id: 10,
    firstName: "Cassey",
    lastName: "Cheak",
    email: "ccheak9@salon.com",
    role: "SELLER",
  },
  {
    id: 11,
    firstName: "Hirsch",
    lastName: "Sidlow",
    email: "hsidlowa@biblegateway.com",
    role: "BUYER",
  },
  {
    id: 12,
    firstName: "Roanna",
    lastName: "Coneron",
    email: "rconeronb@imageshack.us",
    role: "SELLER",
  },
  {
    id: 13,
    firstName: "Neille",
    lastName: "Vsanelli",
    email: "nvsanellic@dropbox.com",
    role: "BUYER",
  },
  {
    id: 14,
    firstName: "Loretta",
    lastName: "Blas",
    email: "lblasd@homestead.com",
    role: "BUYER",
  },
  {
    id: 15,
    firstName: "Skylar",
    lastName: "Kob",
    email: "skobe@addtoany.com",
    role: "BUYER",
  },
  {
    id: 16,
    firstName: "Lurette",
    lastName: "Dank",
    email: "ldankf@irs.gov",
    role: "BUYER",
  },
  {
    id: 17,
    firstName: "Zarah",
    lastName: "MacGahy",
    email: "zmacgahyg@blogs.com",
    role: "SELLER",
  },
  {
    id: 18,
    firstName: "Frasier",
    lastName: "Samudio",
    email: "fsamudioh@mit.edu",
    role: "SELLER",
  },
  {
    id: 19,
    firstName: "Gusti",
    lastName: "Reynold",
    email: "greynoldi@ucoz.ru",
    role: "BUYER",
  },
  {
    id: 20,
    firstName: "Dilly",
    lastName: "Raigatt",
    email: "draigattj@foxnews.com",
    role: "BUYER",
  },
  {
    id: 21,
    firstName: "Armin",
    lastName: "Pigney",
    email: "apigneyk@latimes.com",
    role: "BUYER",
  },
  {
    id: 22,
    firstName: "Caterina",
    lastName: "Piddletown",
    email: "cpiddletownl@ihg.com",
    role: "SELLER",
  },
  {
    id: 23,
    firstName: "Scarlett",
    lastName: "Phillot",
    email: "sphillotm@mapy.cz",
    role: "BUYER",
  },
  {
    id: 24,
    firstName: "Mozes",
    lastName: "Lince",
    email: "mlincen@paypal.com",
    role: "BUYER",
  },
  {
    id: 25,
    firstName: "Vallie",
    lastName: "Songist",
    email: "vsongisto@bluehost.com",
    role: "SELLER",
  },
  {
    id: 26,
    firstName: "Nichole",
    lastName: "Domek",
    email: "ndomekp@techcrunch.com",
    role: "BUYER",
  },
  {
    id: 27,
    firstName: "Prudi",
    lastName: "Kynvin",
    email: "pkynvinq@hexun.com",
    role: "BUYER",
  },
  {
    id: 28,
    firstName: "Umeko",
    lastName: "Aphale",
    email: "uaphaler@usa.gov",
    role: "BUYER",
  },
  {
    id: 29,
    firstName: "Kale",
    lastName: "Putterill",
    email: "kputterills@wikispaces.com",
    role: "BUYER",
  },
  {
    id: 30,
    firstName: "Melodie",
    lastName: "Handlin",
    email: "mhandlint@webnode.com",
    role: "BUYER",
  },
  {
    id: 31,
    firstName: "Nahum",
    lastName: "Geockle",
    email: "ngeockleu@joomla.org",
    role: "BUYER",
  },
  {
    id: 32,
    firstName: "Sharla",
    lastName: "Tolworthie",
    email: "stolworthiev@hibu.com",
    role: "BUYER",
  },
  {
    id: 33,
    firstName: "Torr",
    lastName: "Sproule",
    email: "tsproulew@imgur.com",
    role: "BUYER",
  },
  {
    id: 34,
    firstName: "Abram",
    lastName: "Greenier",
    email: "agreenierx@chicagotribune.com",
    role: "BUYER",
  },
  {
    id: 35,
    firstName: "Ashia",
    lastName: "Brosch",
    email: "abroschy@creativecommons.org",
    role: "BUYER",
  },
  {
    id: 36,
    firstName: "Culver",
    lastName: "Colnett",
    email: "ccolnettz@gravatar.com",
    role: "SELLER",
  },
  {
    id: 37,
    firstName: "Aprilette",
    lastName: "Gloucester",
    email: "agloucester10@github.com",
    role: "BUYER",
  },
  {
    id: 38,
    firstName: "Etheline",
    lastName: "Kelner",
    email: "ekelner11@wisc.edu",
    role: "SELLER",
  },
  {
    id: 39,
    firstName: "Blair",
    lastName: "Belliveau",
    email: "bbelliveau12@simplemachines.org",
    role: "BUYER",
  },
  {
    id: 40,
    firstName: "Sallyann",
    lastName: "Hutley",
    email: "shutley13@buzzfeed.com",
    role: "BUYER",
  },
  {
    id: 41,
    firstName: "Bobbee",
    lastName: "Seligson",
    email: "bseligson14@cornell.edu",
    role: "BUYER",
  },
  {
    id: 42,
    firstName: "Claudius",
    lastName: "Yellowlea",
    email: "cyellowlea15@discovery.com",
    role: "SELLER",
  },
  {
    id: 43,
    firstName: "Lesley",
    lastName: "Woodroofe",
    email: "lwoodroofe16@netscape.com",
    role: "BUYER",
  },
  {
    id: 44,
    firstName: "Sigmund",
    lastName: "Kenzie",
    email: "skenzie17@plala.or.jp",
    role: "BUYER",
  },
  {
    id: 45,
    firstName: "Fowler",
    lastName: "Hagstone",
    email: "fhagstone18@reverbnation.com",
    role: "BUYER",
  },
  {
    id: 46,
    firstName: "Darcey",
    lastName: "Ritchie",
    email: "dritchie19@jimdo.com",
    role: "SELLER",
  },
  {
    id: 47,
    firstName: "Sallyanne",
    lastName: "Lindenbaum",
    email: "slindenbaum1a@deliciousdays.com",
    role: "SELLER",
  },
  {
    id: 48,
    firstName: "Irv",
    lastName: "Chicotti",
    email: "ichicotti1b@skyrock.com",
    role: "BUYER",
  },
  {
    id: 49,
    firstName: "Jessamine",
    lastName: "Walsh",
    email: "jwalsh1c@blogspot.com",
    role: "BUYER",
  },
  {
    id: 50,
    firstName: "Zollie",
    lastName: "Demange",
    email: "zdemange1d@home.pl",
    role: "BUYER",
  },
  {
    id: 51,
    firstName: "Sidonia",
    lastName: "Millmore",
    email: "smillmore1e@noaa.gov",
    role: "BUYER",
  },
  {
    id: 52,
    firstName: "Luci",
    lastName: "Bambury",
    email: "lbambury1f@seesaa.net",
    role: "BUYER",
  },
  {
    id: 53,
    firstName: "Eldredge",
    lastName: "Yuryshev",
    email: "eyuryshev1g@toplist.cz",
    role: "BUYER",
  },
  {
    id: 54,
    firstName: "Avrit",
    lastName: "Agget",
    email: "aagget1h@purevolume.com",
    role: "BUYER",
  },
  {
    id: 55,
    firstName: "Jorry",
    lastName: "Farfolomeev",
    email: "jfarfolomeev1i@who.int",
    role: "SELLER",
  },
  {
    id: 56,
    firstName: "Timmie",
    lastName: "Hilldrup",
    email: "thilldrup1j@tuttocitta.it",
    role: "SELLER",
  },
  {
    id: 57,
    firstName: "Weston",
    lastName: "Crotty",
    email: "wcrotty1k@vinaora.com",
    role: "SELLER",
  },
  {
    id: 58,
    firstName: "Cyrille",
    lastName: "Girodin",
    email: "cgirodin1l@exblog.jp",
    role: "SELLER",
  },
  {
    id: 59,
    firstName: "Ave",
    lastName: "Cator",
    email: "acator1m@spiegel.de",
    role: "SELLER",
  },
  {
    id: 60,
    firstName: "Issi",
    lastName: "Rawls",
    email: "irawls1n@artisteer.com",
    role: "BUYER",
  },
  {
    id: 61,
    firstName: "Rhiamon",
    lastName: "O'Heffernan",
    email: "roheffernan1o@mozilla.com",
    role: "BUYER",
  },
  {
    id: 62,
    firstName: "Dimitry",
    lastName: "Aust",
    email: "daust1p@pbs.org",
    role: "SELLER",
  },
  {
    id: 63,
    firstName: "Faunie",
    lastName: "Petschel",
    email: "fpetschel1q@pcworld.com",
    role: "BUYER",
  },
  {
    id: 64,
    firstName: "Em",
    lastName: "Stanett",
    email: "estanett1r@google.com.au",
    role: "BUYER",
  },
  {
    id: 65,
    firstName: "Traci",
    lastName: "Pods",
    email: "tpods1s@cyberchimps.com",
    role: "SELLER",
  },
  {
    id: 66,
    firstName: "Cymbre",
    lastName: "McMackin",
    email: "cmcmackin1t@narod.ru",
    role: "BUYER",
  },
  {
    id: 67,
    firstName: "Petra",
    lastName: "Escalero",
    email: "pescalero1u@imgur.com",
    role: "BUYER",
  },
  {
    id: 68,
    firstName: "Rufe",
    lastName: "Goroni",
    email: "rgoroni1v@latimes.com",
    role: "BUYER",
  },
  {
    id: 69,
    firstName: "Gabie",
    lastName: "Plumbridge",
    email: "gplumbridge1w@squidoo.com",
    role: "SELLER",
  },
  {
    id: 70,
    firstName: "Abbey",
    lastName: "Linebarger",
    email: "alinebarger1x@thetimes.co.uk",
    role: "SELLER",
  },
  {
    id: 71,
    firstName: "Kippie",
    lastName: "Davidowich",
    email: "kdavidowich1y@cafepress.com",
    role: "BUYER",
  },
  {
    id: 72,
    firstName: "Gustav",
    lastName: "Braisher",
    email: "gbraisher1z@simplemachines.org",
    role: "BUYER",
  },
  {
    id: 73,
    firstName: "Allyn",
    lastName: "Gabbett",
    email: "agabbett20@china.com.cn",
    role: "BUYER",
  },
  {
    id: 74,
    firstName: "Judi",
    lastName: "Wallage",
    email: "jwallage21@ifeng.com",
    role: "SELLER",
  },
  {
    id: 75,
    firstName: "Adora",
    lastName: "Clem",
    email: "aclem22@ucla.edu",
    role: "BUYER",
  },
  {
    id: 76,
    firstName: "Druci",
    lastName: "Marfield",
    email: "dmarfield23@ycombinator.com",
    role: "SELLER",
  },
  {
    id: 77,
    firstName: "Marsh",
    lastName: "Klaessen",
    email: "mklaessen24@scientificamerican.com",
    role: "BUYER",
  },
  {
    id: 78,
    firstName: "Vicky",
    lastName: "Cockton",
    email: "vcockton25@com.com",
    role: "SELLER",
  },
  {
    id: 79,
    firstName: "Garvy",
    lastName: "Leport",
    email: "gleport26@un.org",
    role: "BUYER",
  },
  {
    id: 80,
    firstName: "Oswald",
    lastName: "Bezzant",
    email: "obezzant27@harvard.edu",
    role: "SELLER",
  },
  {
    id: 81,
    firstName: "Virgie",
    lastName: "Towle",
    email: "vtowle28@geocities.jp",
    role: "BUYER",
  },
  {
    id: 82,
    firstName: "Ferrel",
    lastName: "Rizzolo",
    email: "frizzolo29@state.tx.us",
    role: "BUYER",
  },
  {
    id: 83,
    firstName: "Karina",
    lastName: "Lukes",
    email: "klukes2a@domainmarket.com",
    role: "BUYER",
  },
  {
    id: 84,
    firstName: "Alfonse",
    lastName: "Cochrane",
    email: "acochrane2b@marketwatch.com",
    role: "SELLER",
  },
  {
    id: 85,
    firstName: "Winonah",
    lastName: "Chiverstone",
    email: "wchiverstone2c@hostgator.com",
    role: "SELLER",
  },
  {
    id: 86,
    firstName: "Holly",
    lastName: "Rannald",
    email: "hrannald2d@bloomberg.com",
    role: "BUYER",
  },
  {
    id: 87,
    firstName: "Wini",
    lastName: "Allaker",
    email: "wallaker2e@surveymonkey.com",
    role: "BUYER",
  },
  {
    id: 88,
    firstName: "Isidoro",
    lastName: "Elves",
    email: "ielves2f@ucoz.com",
    role: "BUYER",
  },
  {
    id: 89,
    firstName: "Steffi",
    lastName: "Leimster",
    email: "sleimster2g@friendfeed.com",
    role: "SELLER",
  },
  {
    id: 90,
    firstName: "Barby",
    lastName: "Vain",
    email: "bvain2h@cocolog-nifty.com",
    role: "SELLER",
  },
  {
    id: 91,
    firstName: "Erna",
    lastName: "Huffadine",
    email: "ehuffadine2i@discovery.com",
    role: "SELLER",
  },
  {
    id: 92,
    firstName: "Elnore",
    lastName: "Blazic",
    email: "eblazic2j@un.org",
    role: "BUYER",
  },
  {
    id: 93,
    firstName: "Brig",
    lastName: "Simacek",
    email: "bsimacek2k@sogou.com",
    role: "BUYER",
  },
  {
    id: 94,
    firstName: "Megen",
    lastName: "Boffey",
    email: "mboffey2l@feedburner.com",
    role: "SELLER",
  },
  {
    id: 95,
    firstName: "Alano",
    lastName: "Van der Spohr",
    email: "avanderspohr2m@360.cn",
    role: "SELLER",
  },
  {
    id: 96,
    firstName: "Salome",
    lastName: "Vellden",
    email: "svellden2n@ted.com",
    role: "SELLER",
  },
  {
    id: 97,
    firstName: "Melisa",
    lastName: "Gerrad",
    email: "mgerrad2o@economist.com",
    role: "SELLER",
  },
  {
    id: 98,
    firstName: "Adamo",
    lastName: "Pavese",
    email: "apavese2p@storify.com",
    role: "BUYER",
  },
  {
    id: 99,
    firstName: "Helaina",
    lastName: "Cawthra",
    email: "hcawthra2q@1und1.de",
    role: "BUYER",
  },
  {
    id: 100,
    firstName: "Ezri",
    lastName: "Oloman",
    email: "eoloman2r@howstuffworks.com",
    role: "SELLER",
  },
];

const UsersPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<any[]>(usersData);

  //   const { detailCards } = useSelector((state) => state.user);
  const [rowValue, setRowValue] = React.useState<UserProfile | null>(null);

  //   React.useEffect(() => {
  //     setUsers(detailCards);
  //   }, [detailCards]);

  React.useEffect(() => {
    dispatch(getDetailCards());
  }, []);

  return (
    <MainCard content={false}>
      {/* filter section */}
      <CardContent>
        <UserFilter {...{ users: users, setUsers }} />
      </CardContent>

      {/* table */}
      <Box display={open ? "flex" : "block"}>
        <Grid container sx={{ position: "relative" }}>
          <Grid size={{ sm: open ? 5 : 12, xs: 12 }}>
            <TableProvider>
              <GenericTable
                open={open}
                setOpen={setOpen}
                data={users}
                setRowValue={setRowValue}
                HeaderComponent={UserTableHeader}
                BodyComponent={UserRows}
              />
            </TableProvider>
          </Grid>
          <Grid
            size={{ sm: open ? 7 : 12, xs: 12 }}
            sx={{ borderLeft: "1px solid", borderLeftColor: "divider" }}
          >
            <CustomDrawer open={open} setOpen={setOpen} rowValue={rowValue!}>
              <UserDetails rowValue={rowValue!} />
            </CustomDrawer>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default UsersPage;
