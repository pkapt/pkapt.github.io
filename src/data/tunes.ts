export type LinkItem = {
  name: string;
  href: string;
};

export type SongItem = {
  name: string;
  href: string;
  pdfs: LinkItem[];
};

export const backingTracks: LinkItem[] = [
  { name: "C Generic", href: "https://www.youtube.com/watch?v=4pRXDvzW5Yk" },
  { name: "G Generic", href: "https://www.youtube.com/watch?v=SknFtfea7rA" },
  { name: "D Generic", href: "https://www.youtube.com/watch?v=EqCxCPwKk0c" }
];

export const tunes: LinkItem[] = [
  { name: "Old Beveled Mirror", href: "/assets/old_beveled_mirror.jpg" },
  { name: "Booth Shot Lincoln", href: "/assets/booth_shot_lincoln.pdf" },
  { name: "Big Sandy River", href: "/assets/big_sandy_river.png" },
  { name: "Cripple Creek", href: "/assets/Cripple_Creek_G.pdf" },
  { name: "Foggy Mountain Breakdown", href: "/assets/Foggy_Mountain_Breakdown.pdf" },
  { name: "Squirrel Hunter", href: "/assets/squirrel_hunters.png" },
  { name: "Leather Britches", href: "/assets/Leather_Britches.pdf" },
  { name: "Lonesome Fiddle Blues", href: "/assets/Lonesome Fiddle Blues Mandolin.pdf" },
  { name: "Anything For John Joe", href: "/assets/Anything For John Joe.jpg" },
  { name: "Banish Misfortune", href: "/assets/Banish Misfortune.jpg" },
  { name: "Barrowburn Reel", href: "/assets/Barrowburn Reel.jpg" },
  { name: "Ducks on the millpond", href: "/assets/Ducks_On_The_Millpond_D_Major.pdf" },
  { name: "Coleraine (jig)", href: "https://www.youtube.com/watch?v=gpBof9_5Yfk" },
  { name: "Dusty Windowsills", href: "/assets/Dusty Windowsills.jpg" },
  { name: "Rip the Calico (reel)", href: "/assets/Rip the Calico.jpg" },
  { name: "Clinch mountain backstep", href: "/assets/Clinch Mountain Backstep.pdf" },
  { name: "Cuckoo's Nest", href: "/assets/Cuckoos Nest.pdf" },
  { name: "Over The Waterfall", href: "/assets/Over The Waterfall.pdf" },
  { name: "Beaumont Rag", href: "/assets/Beaumont Rag.pdf" },
  { name: "Turkey In The Straw", href: "/assets/Turkey_In_The_Straw.pdf" },
  { name: "Roanoke", href: "http://www.traditionalmusic.co.uk/american-mandolin-tab/roanoke.htm" },
  { name: "Throw It Across The Road", href: "/assets/Throw_It_Across_The_Road.pdf" },
  { name: "Big Mon", href: "/assets/Big MOn.pdf" },
  { name: "Eighth of January", href: "/assets/The_Eighth_of_January.pdf" },
  { name: "Old Dangerfield", href: "/assets/Old Dangerfield (Compton).pdf" },
  { name: "Gold Rush", href: "/assets/Gold Rush.pdf" },
  { name: "Jerusalem Ridge", href: "/assets/Jerusalem Ridge.pdf" },
  { name: "Blackberry Blossom", href: "/assets/Blackberry-Blossom.pdf" },
  { name: "Shady Grove (Minor)", href: "/assets/Shady_Grove_Embellished_Melody.pdf" },
  { name: "Big Sciota", href: "/assets/Big_Sciota.pdf" },
  { name: "Old Grimes", href: "/assets/Old_Grimes.pdf" },
  { name: "Cooley's reel", href: "/assets/Cooleys_Reel.pdf" },
  { name: "Angeline The Baker", href: "/assets/Angeline_The_Baker.pdf" },
  { name: "Arkansas Traveller", href: "/assets/Arkansas_Traveler.pdf" },
  { name: "Bill Cheatum", href: "/assets/Bill-Cheatham.pdf" },
  { name: "Billy in the Lowground", href: "/assets/Billy_In_The_Lowground.pdf" },
  { name: "Boil Em Cabbage Down", href: "/assets/Boil_Them_Cabbage_Down.pdf" },
  { name: "Cherokee Shuffle", href: "file:///C:/Users/kapte/Downloads/Man-CherokeeShuffle.pdf" },
  { name: "Did You Ever See the Devil Uncle Joe", href: "/assets/Did_you_ever_see_the_devil_uncle_joe.pdf" },
  { name: "Devil's Dream", href: "/assets/Devils_Dream.pdf" },
  { name: "East Tennessee blues", href: "/assets/East Tennessee blues.pdf" },
  { name: "Fisher's Hornpipe", href: "/assets/Fishers_Hornpipe.pdf" },
  { name: "Forked Deer", href: "http://www.bradleylaird.com/playthemandolin/tabs-forked-deer.html" },
  { name: "Liberty", href: "/assets/Liberty.pdf" },
  { name: "Red Haired Boy", href: "/assets/Red_Haired_Boy.pdf" },
  { name: "Sailors Hornpipe", href: "/assets/Sailors_Hornpipe.pdf" },
  { name: "Saint Anne's Reel", href: "/assets/St._Annes_Reel.pdf" },
  { name: "Salt Creek", href: "/assets/Salt_Creek.pdf" },
  { name: "Soldier's Joy", href: "/assets/Soldiers_Joy.pdf" },
  { name: "Temperence Reel", href: "https://simplymandolin.com/temperance-reel/" },
  { name: "Whiskey Before Breakfast", href: "/assets/Whiskey_Before_Breakfast.pdf" }
];

export const transcriptions: LinkItem[] = [
  { name: "Doc & Dawg", href: "/assets/Doc_&_Dawg.pdf" },
  { name: "Temperance Reel (Dawg solo)", href: "/assets/Temperance_Reel_Dawg_Solo.pdf" }
];

export const songs: SongItem[] = [
  {
    name: "Will the Circle Be Unbroken",
    href: "/songs/will-the-circle-be-unbroken",
    pdfs: [
      { name: "Lyrics", href: "/assets/Will-The-Circle-Be-Unbroken-Lyrics.pdf" },
      {
        name: "Key of B with Double Stops",
        href: "/assets/Will_The_Circle_Be_Unbroken_Key_of_B_with_Double_Stops.pdf"
      },
      { name: "Simple", href: "/assets/Will_The_Circle_Be_Unbroken_Simple.pdf" }
    ]
  }
];
