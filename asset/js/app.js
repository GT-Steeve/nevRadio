// ════════════════════════════════════════════════════════
//  PLAYLIST — Ajoute tes URLs dans les champs "url" ci-dessous
//
//  Format :  { title: "Nom de la piste", url: "TON_LIEN_ICI" }
//
//  Pour ajouter une catégorie :
//    { name: "Nom", tracks: [ ... ] }
// ════════════════════════════════════════════════════════

const CATEGORIES = [
  {
    name: "Musique",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKZw7nwfd-KbW98Jff-q-gAcckg2wLXH7-npDLsjqdZCo0nCGk0YhAIb-rjkxw9AGetHE",
    tracks: [
      { title: "American Boy - Estelle (feat. Kanye West)", url: "https://soundcloud.com/estelleofficial/american-boy-feat-kanye-west" },
      { title: "Bad Guy - Billie Eilish", url: "https://soundcloud.com/billieeilish/bad-guy" },
      { title: "Robin Thicke - Blurred Lines ft. T.I., Pharrell", url: "https://www.youtube.com/watch?v=yyDUC1LUXSU" },
      { title: "Chamillionaire - Ridin'", url: "https://www.youtube.com/watch?v=CtwJvgPJ9xw" },
      { title: "Carly Rae Jepsen - Call Me Maybe", url: "https://www.youtube.com/watch?v=fWNaR-rxAic" },
      { title: "Jessie J - Price Tag ft. B.o.B", url: "https://www.youtube.com/watch?v=qMxX-QOV9tI" },
      { title: "OMI - Cheerleader", url: "https://www.youtube.com/watch?v=jGflUbPQfW8" },
      { title: "Black Mamba - Ghetto Millionnaire", url: "https://www.youtube.com/watch?v=lTqVCJRju_Q" },
      { title: "Desiigner - Panda", url: "https://www.youtube.com/watch?v=E5ONTXHS2mM" },
      { title: "Kat DeLuna - Run The Show ft. Busta Rhymes", url: "https://www.youtube.com/watch?v=fhsHOlliExk" },
      { title: "Pitbull - Timber ft. Ke$ha", url: "https://www.youtube.com/watch?v=hHUbLv4ThOo" },
      { title: "Pitbull - Give Me Everything ft. Ne-Yo, Afrojack, Nayer", url: "https://www.youtube.com/watch?v=EPo5wWmKEaI" },
      { title: "The High Strung - The Luck You Got (Shameless Theme)", url: "https://www.youtube.com/watch?v=b3KuMFXm2xk" },
      { title: "Bobby McFerrin - Don't Worry Be Happy", url: "https://www.youtube.com/watch?v=d-diB65scQU" },
      { title: "The Boys are Back in Town - Thin Lizzy", url: "https://www.youtube.com/watch?v=hQo1HIcSVtg" },
      { title: "Don't Stop Me Now - Queen", url: "https://www.youtube.com/watch?v=hBp4dgE7Bho" },
      { title: "Beach Boys - I Get Around", url: "https://www.youtube.com/watch?v=wREBD2og5iY" },
      { title: "Woodkid - Iron", url: "https://www.youtube.com/watch?v=nj9ucBQ04Ag" },
      { title: "Freedom To Move (Domino Theory Remix)", url: "https://www.youtube.com/watch?v=Ta2crGpWETk" },
      { title: "Lacrimosa - Wolfgang Amadeus Mozart", url: "https://www.youtube.com/watch?v=k1-TrAvp_xs" },
      { title: "Aram Khachaturian - Sabre Dance", url: "https://www.youtube.com/watch?v=gqg3l3r_DRI" },
      { title: "Lauryn Hill - Doo Wop", url: "https://www.youtube.com/watch?v=G5zirRc34Xc" },
      { title: "Beggin - Madcon", url: "https://www.youtube.com/watch?v=fn8jB0Ubx5s" },
      { title: "Lemar - If There's Any Justice", url: "https://www.youtube.com/watch?v=35KXjhvUHuA" },
      { title: "Sean Kingston - Me Love", url: "https://www.youtube.com/watch?v=t130Gzik-RM" },
      { title: "Sean Kingston - Beautiful Girls", url: "https://www.youtube.com/watch?v=7lBUiFdQLu0" },
      { title: "GALA - Freed From Desire", url: "https://www.youtube.com/watch?v=kHV_zePxnmY" },
      { title: "The Supermen Lovers - Starlight", url: "https://www.youtube.com/watch?v=ByK5qt0pRg8" },
      { title: "Adele - Skyfall", url: "https://www.youtube.com/watch?v=LJzp_mDxaT0" },
      { title: "Maurice Ravel - Boléro", url: "https://www.youtube.com/watch?v=r30D3SW4OVw" },
      { title: "Chopin - Nocturne op.9 No.2", url: "https://www.youtube.com/watch?v=9E6b3swbnWg" },
    ]
  },
  {
    name: "Ost Film",
    cover: "https://cerhic.hypotheses.org/files/2016/11/musique-film-beberanol-copie-634x372.png",
    tracks: [
      { title: "Star Wars - Duel of the Fates", url: "https://www.youtube.com/watch?v=g_BB0tj4tf8" },
      { title: "Clubbed to Death - Matrix", url: "https://www.youtube.com/watch?v=20TX1VlWtzw" },
      { title: "Rob Dougan - Chateau Extended", url: "https://www.youtube.com/watch?v=KCNOe7s1lD0" },
      { title: "Ace Savage - Scheming (Extended Instrumental Slowed)", url: "https://www.youtube.com/watch?v=f6GAPrvKp2I" },
    ]
  },
  {
    name: "Jeux Vidéo",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli78tNVhAncK0HxrrxUJyf1oc4Ls-yjYsLeZqYwe-Io7wMPNQ84QfTZWIMy47E0QtR9w",
    tracks: [
      { title: "Horizon Zero Dawn - Aloy's Theme", url: "https://www.youtube.com/watch?v=P2JNQhAsIHA" },
      { title: "Daredevil (Extended) - Ace Combat 7", url: "https://www.youtube.com/watch?v=OYjlsO7-mzA" },
      { title: "Streets Of New Meridian - Skullgirls", url: "https://www.youtube.com/watch?v=EY6-zgbQI6Y" },
      { title: "Taiyo High School - Rival Schools", url: "https://www.youtube.com/watch?v=5nW7q0Sv3jU" },
      { title: "Gedo High School - Rival Schools", url: "https://www.youtube.com/watch?v=QPcCcorpTrg" },
      { title: "Bloody Roar 3 - Into the Battlefield", url: "https://www.youtube.com/watch?v=rb9r7JW96ZU" },
      { title: "Bloody Roar 4 - Opening Demo", url: "https://www.youtube.com/watch?v=YwybO2DFm5c" },
      { title: "Tekken 5 - Moonlit Wilderness", url: "https://www.youtube.com/watch?v=ClvzNSejzXw" },
      { title: "SPARKING (Extended) - Tekken 5", url: "https://www.youtube.com/watch?v=9U2u31Bv_uk" },
      { title: "Tekken 3 - Hwoarang Theme", url: "https://www.youtube.com/watch?v=ZTzvLjEkMWE" },
      { title: "Fortnite - You Don't Know Me Lobby", url: "https://www.youtube.com/watch?v=kWp5S7DrdfQ" },
      { title: "Star Fox - Corneria", url: "https://www.youtube.com/watch?v=oBD3FO6ozXc" },
    ]
  },
  {
    name: "Dragon Ball Z",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcB-Ajc9jc9b4NAFTHqRYyIoU_cbMHOoMwQhNoE4pgM1MYIUa6B_Lz8eCwSCyRkhqm5SI",
    tracks: [
      { title: "Dragon Ball Z - Best Music Part 1 | Epic Fight", url: "https://www.youtube.com/watch?v=218ELDhIiGY" },
      { title: "Ultimate Battle - Dragon Ball Super", url: "https://www.youtube.com/watch?v=grtO6zxMY6I" },
      { title: "Dragon Ball Super - Jiren Theme Song", url: "https://www.youtube.com/watch?v=Ibb_B4bQ6VM" },
      { title: "Dragon Ball Super - Genkai Toppa × Survivor", url: "https://www.youtube.com/watch?v=4apvo3w97qY" },
    ]
  },
  {
    name: "Hunter X Hunter",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07mV21CT4Ce7WFo0kmBskWVVjKdB5nWbXbMXPR3I3gkG4KJ1yU4DTbWOER6eEXMNV8zo",
    tracks: [
      { title: "Hunter X Hunter OST - Kingdom Of Predators", url: "https://www.youtube.com/watch?v=T8ex7oKbjhU" },
      { title: "Hunter x Hunter 2011 OST 3 - G.I Theme", url: "https://www.youtube.com/watch?v=KR2P_g_MXzk" },
    ]
  },
  {
    name: "One Piece",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22Ql38iEey5v0tbjuX-Jpe7Wy0mpk5uYKeA",
    tracks: [
      { title: "One Piece - Fight Music Compilation (OST)", url: "https://www.youtube.com/watch?v=SYZao9qhyLI" },
      { title: "One Piece - Castle Karakuri Transform (Extended)", url: "https://www.youtube.com/watch?v=kVMvzIdkM-Q" },
      { title: "One Piece Opening 12", url: "https://www.youtube.com/watch?v=eS0hCgXMnT4" },
    ]
  },
  {
    name: "Persona",
    cover: "https://global-img.gamergen.com/persona-25th-anniversary-13-07-2021_0900984927.jpg",
    tracks: [
      { title: "It's Going Down Now", url: "https://www.youtube.com/watch?v=2KuWjZD6PBA" },
      { title: "Sky's The Limit", url: "https://www.youtube.com/watch?v=O0cI9N5rfrg" },
    ]
  },
  {
    name: "SNK",
    cover: "https://m.media-amazon.com/images/S/pv-target-images/abce4f3146841f9aa66e9963531ab38e64108ecaa79b93e5a2781c89c59ebaac.jpg",
    tracks: [
      { title: "Attack on Titan Season 4 - Epic Soundtrack Mix", url: "https://www.youtube.com/watch?v=ri6YWr03izo" },
      { title: "SNK - Return to Revelio", url: "https://www.youtube.com/watch?v=sZyirQuRzbM" },
      { title: "Guren no Yumiya | Season 1", url: "https://www.youtube.com/watch?v=2B6nj38AdD0" },
      { title: "Shinzou wo Sasageyo | Season 2", url: "https://www.youtube.com/watch?v=iA7c314_SWM" },
      { title: "Shinzou wo Sasageyo | Season 3", url: "https://www.youtube.com/watch?v=wwfwjEroBXc" },
      { title: "The Rumbling (Extended) | Season 4", url: "https://www.youtube.com/watch?v=mE53L3UMLFs" },
    ]
  },
  {
    name: "Blazblue",
    cover: "https://n-gamz.com/wp-content/uploads/2016/11/blazblue-central-fiction-test-review-screen-logo.jpg",
    tracks: [
      { title: "Chronophantasma Extended", url: "https://www.youtube.com/watch?v=6_XXTCHeTp4" },
      { title: "Asami Imai - Shinsō Extended", url: "https://www.youtube.com/watch?v=6cG5MZ4avRo" },
      { title: "Continuum Shift Extended", url: "https://www.youtube.com/watch?v=lLMadq6nGE8" },
      { title: "Calamity Trigger", url: "https://www.youtube.com/watch?v=VFylEGx0AlM" },
      { title: "Continuum Shift 2", url: "https://www.youtube.com/watch?v=seFZHD_azEo" },
      { title: "Continuum Shift Intro", url: "https://www.youtube.com/watch?v=QsbjKVx_8-s" },
      { title: "Chrono Phantasma Arcade", url: "https://www.youtube.com/watch?v=KFY6e1b4hSk" },
      { title: "Calamity Trigger Arcade Opening", url: "https://www.youtube.com/watch?v=m3t9YFu2StQ" },
    ]
  },
  {
    name: "Demon's Souls / Dark Souls",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVIk3M2AXRV764RDtXCcAkizXVeHrs54iNX-LGpxXhfkGdjInDzDSyfCEKfmCeT5JMYQ",
    tracks: [
      { title: "Dark Souls - Firelink Shrine", url: "https://www.youtube.com/watch?v=4wKRE_LM9DY" },
      { title: "Dark Souls - Great Grey Wolf Sif", url: "https://www.youtube.com/watch?v=DIicTozhr7U" },
    ]
  },
  {
    name: "Devil May Cry",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTG7GHxFSfl4ta2PxQfX0yPF0XpjyDgfNFzFl7U618VGkqmn4-QltTSN2gqyzIgcX8q0",
    tracks: [
      { title: "Arkham Battle 2", url: "https://www.youtube.com/watch?v=VptStuoc4sI" },
      { title: "Devils Never Cry", url: "https://www.youtube.com/watch?v=QiLlAgSIU40" },
      { title: "Legendary Battle", url: "https://www.youtube.com/watch?v=l3bdMODR-KY" },
      { title: "Lock & Load", url: "https://www.youtube.com/watch?v=dCrR2j3CGdo" },
      { title: "Psycho Siren", url: "https://www.youtube.com/watch?v=H5jNlLbTN5w" },
      { title: "Public Enemy", url: "https://www.youtube.com/watch?v=aUr9WJRkWMk" },
      { title: "The Time Has Come", url: "https://www.youtube.com/watch?v=JxZX8_lAp6E" },
      { title: "Ultra Violet", url: "https://www.youtube.com/watch?v=PJ0xaPS1wLY" },
      { title: "Vergil Battle 2", url: "https://www.youtube.com/watch?v=l_kB97VrKBA" },
    ]
  },
  {
    name: "Final Fantasy",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ81Qx2wTdn8p9WDEfYAVXzXgdKFm-cfyHlMgS4NF_A7gH8DEL56lo8sJQamvpSE2a_nw",
    tracks: [
      { title: "Cosmo Canyon - FF7", url: "https://www.youtube.com/watch?v=F6mgso2LfCg" },
      { title: "Let the Battles Begin! - FF7 Extended", url: "https://www.youtube.com/watch?v=ufboXid14Q0" },
      { title: "Fight On! Boss Battle - FF7", url: "https://www.youtube.com/watch?v=0VL1RXzyAsE" },
      { title: "Jenova - FF7", url: "https://www.youtube.com/watch?v=m9kGaw216HM" },
      { title: "Battle Theme - Final Fantasy V", url: "https://www.youtube.com/watch?v=u7ee_xrawZs" },
      { title: "Main Theme of Final Fantasy V", url: "https://www.youtube.com/watch?v=UYIafOKKo-I" },
      { title: "Final Fantasy Battle Themes 1-14", url: "https://www.youtube.com/watch?v=-Xwk-yqHIvw" },
      { title: "FF Tactics Advance - Undefeated Heart", url: "https://www.youtube.com/watch?v=QIGMzr7Yj1k" },
      { title: "FF Tactics Advance - Unavoidable Destiny", url: "https://www.youtube.com/watch?v=e6Mzx1W6VK4" },
      { title: "FF Tactics Advance - Painful Battle", url: "https://www.youtube.com/watch?v=1o1Cbhe3GqY" },
    ]
  },
  {
    name: "Gunstar Heroes",
    cover: "https://image.jeuxvideo.com/images-sm/mg/g/u/gustmg0f.jpg",
    tracks: [
      { title: "Dancing Smash-Hero", url: "https://www.youtube.com/watch?v=tZpOOBER2eA" },
      { title: "Theme of Seven-Force", url: "https://www.youtube.com/watch?v=7s2C5s4G-4A" },
      { title: "Stairs Too High", url: "https://www.youtube.com/watch?v=3A1R-yFEl7k" },
      { title: "Dice-Dance-Days", url: "https://www.youtube.com/watch?v=_QXHnF6MjIk" },
      { title: "Empire ~ The Final Assault", url: "https://www.youtube.com/watch?v=PkYgxBFxNYU" },
      { title: "Theme of Smash Daisaku", url: "https://www.youtube.com/watch?v=W4ZYiVsbocs" },
    ]
  },
  {
    name: "Ikaruga",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4sD79jBZSARG0iYbEBzfORnrwVDWxISpbZIevVbDU_zOfN2fAsm3cvkqzHwBMPYF4WQ",
    tracks: [
      { title: "Chapter 1: Ideal (Extended)", url: "https://www.youtube.com/watch?v=nLCO1imTq7w" },
      { title: "Chapter 2: Trial (Extended)", url: "https://www.youtube.com/watch?v=Kn0JZfDZGi4" },
      { title: "Chapter 3: Faith (Extended)", url: "https://www.youtube.com/watch?v=LtcrmZ67Jb8" },
      { title: "Butsutekkai (Extended)", url: "https://www.youtube.com/watch?v=YtznPVqaGz0" },
    ]
  },
  {
    name: "League Of Legends",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzAS1HjfoovDI_E4VUnuFXYpnci15k08to2xtNWVfm7YYKo881uNLDPXJLaDQ0ByPCCXI",
    tracks: [
      { title: "All Songs Worlds 2014-2022", url: "https://www.youtube.com/watch?v=hheZSOCEpwA" },
      { title: "Soul Fighter 2023 - Tournament of Souls", url: "https://www.youtube.com/watch?v=iGrcMLdx8es" },
      { title: "Soul Fighter 2023 - Coming Alive", url: "https://www.youtube.com/watch?v=MDqj3bhxIw0" },
      { title: "Ignite | Worlds 2016", url: "https://www.youtube.com/watch?v=aDJ-bqOkzqY" },
      { title: "Take Over | Worlds 2020", url: "https://www.youtube.com/watch?v=KbNL9ZyB49c" },
      { title: "Legends Never Die | Worlds 2017", url: "https://www.youtube.com/watch?v=4Q46xYqUwZQ" },
    ]
  },
  {
    name: "Megaman",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS216tPcwacI299Eh4ZUM8N43Ni9hPIp9Lz6ioINCtey4HxCb3K320CJDLBBPoAelC1Big",
    tracks: [
      { title: "Bubbleman Stage - Megaman 2", url: "https://www.youtube.com/watch?v=WEsV8-rrk8g" },
      { title: "Metal Man Stage - Mega Man 2", url: "https://www.youtube.com/watch?v=JmUIw40kwxk" },
      { title: "Woodman - Megaman 2", url: "https://www.youtube.com/watch?v=fFsr1tcpEvE" },
      { title: "Wood Man Stage - Super Smash Bros. Ultimate", url: "https://www.youtube.com/watch?v=uYxT6Sx_8mI" },
      { title: "Dr. Wily Stage 1 - Mega Man 2", url: "https://www.youtube.com/watch?v=aFeL7kTw2CU" },
      { title: "Opening Stage Ruined Street - Megaman 7", url: "https://www.youtube.com/watch?v=bC-7GxzjZ0c" },
      { title: "Theme of Bass Friend - Megaman 7", url: "https://www.youtube.com/watch?v=jFm8C7ojMy8" },
      { title: "Cloud Man Stage - Megaman 7", url: "https://www.youtube.com/watch?v=rbp9VO-vRRI" },
      { title: "Burst Man Stage - Megaman 7", url: "https://www.youtube.com/watch?v=PVlbThzVuyk" },
      { title: "Junk Man Stage - Megaman 7", url: "https://www.youtube.com/watch?v=9r_j6cDa1Io" },
      { title: "Turbo Man Stage - Megaman 7", url: "https://www.youtube.com/watch?v=QwGHUKp71uE" },
      { title: "Boss Battle - Megaman 7", url: "https://www.youtube.com/watch?v=sDAz6QvKG0Y" },
      { title: "Final Wily Stage - Megaman 7", url: "https://www.youtube.com/watch?v=CrMK2GCRGPI" },
      { title: "Final Wily Battle - Megaman 7", url: "https://www.youtube.com/watch?v=AA9aLXEP1v4" },
      { title: "Ending - A Hero Returns - Megaman 7", url: "https://www.youtube.com/watch?v=TL7pVXeeHVM" },
    ]
  },
  {
    name: "Monster Hunter",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqKvbURQqVDW_acdLK5HoAJEcwta5jzTMe8-dOjHoFBqauWTaZKfAQpiT854L12KtqYM",
    tracks: [
      { title: "Vaal Hazak Battle (World)", url: "https://www.youtube.com/watch?v=_pk40u9O5nU" },
      { title: "Rathian (World)", url: "https://www.youtube.com/watch?v=qjM_SGCIKMw" },
      { title: "Kushala Daora (World)", url: "https://www.youtube.com/watch?v=-fhfxMwzBm0" },
      { title: "Nargacuga (World)", url: "https://www.youtube.com/watch?v=Hh0YpZPp7Bo" },
      { title: "Bazelgeuse (World)", url: "https://www.youtube.com/watch?v=PH2uF7WEqDQ" },
      { title: "Rajang (World)", url: "https://www.youtube.com/watch?v=_SaIzCoSTmM" },
      { title: "Pokke Village (MHFU)", url: "https://youtu.be/f3OxAxZfElE" },
      { title: "Lao-Shan Lung (GU)", url: "https://www.youtube.com/watch?v=-kYW9nrA5m8" },
      { title: "Nargacuga (GU)", url: "https://www.youtube.com/watch?v=Lo13i1DZ_R4&list=PL5Mj1YD-jmukRto2oCfZSrw9Y9t-85AKk&index=13" },
      { title: "Tigrex (GU)", url: "https://www.youtube.com/watch?v=Lo13i1DZ_R4&list=PL5Mj1YD-jmukRto2oCfZSrw9Y9t-85AKk&index=15" },
      { title: "Yian Garuga (GU)", url: "https://www.youtube.com/watch?v=Lo13i1DZ_R4&list=PL5Mj1YD-jmukRto2oCfZSrw9Y9t-85AKk&index=20" },
      { title: "Rajang (GU)", url: "https://www.youtube.com/watch?v=Lo13i1DZ_R4&list=PL5Mj1YD-jmukRto2oCfZSrw9Y9t-85AKk&index=29" },
    ]
  },
  {
    name: "Octopath Traveler",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0Zn-4YKpuvBcing22abxd26VYxRWFKlWNiZo2NoB5JaJBRh4ir7bJc5LgcAZBE66OlY",
    tracks: [
      { title: "Intro - Octopath Traveler I", url: "https://www.youtube.com/watch?v=sR1OHW_IReI" },
      { title: "My Quiet Forest Home", url: "https://www.youtube.com/watch?v=Dw1kjpRXoAQ" },
      { title: "Battle 1 - Octopath Traveler I", url: "https://www.youtube.com/watch?v=kQUyiDaJxVM" },
      { title: "Battle 2 - Octopath Traveler I", url: "https://www.youtube.com/watch?v=4HEhU5gAXbc" },
      { title: "Battle 3 - Octopath Traveler I", url: "https://www.youtube.com/watch?v=gfSr7Vs0-Ew" },
      { title: "Decisive Battle I - Octopath Traveler I", url: "https://www.youtube.com/watch?v=Ukmq3BFgefY" },
      { title: "Decisive Battle II - Octopath Traveler I", url: "https://www.youtube.com/watch?v=C2V4XopnBRE" },
      { title: "Battle at Journey's End - Octopath Traveler I", url: "https://www.youtube.com/watch?v=A1mMMXtWwB8" },
      { title: "Intro - Octopath Traveler II", url: "https://www.youtube.com/watch?v=PEh1as9hVy8" },
      { title: "Battle 1 - Octopath Traveler II", url: "https://www.youtube.com/watch?v=xFR2WsdGE9Y" },
      { title: "Decisive Battle I - Octopath Traveler II", url: "https://youtu.be/HZ65XrQWDi0" },
    ]
  },
  {
    name: "Pokémon",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByab0LNOS_nTC6s0UyZC7RTYQLYzGhOIh3JxGj7TGgA58AQGb7CCIhQVWLGtADBsxYSY",
    tracks: [
      { title: "All Wild Battle Themes (Gen 1-9)", url: "https://www.youtube.com/watch?v=LufEIdG4X2k" },
      { title: "All Trainer Battle Themes (Gen 1-8)", url: "https://www.youtube.com/watch?v=IB8x5UMLDTs" },
      { title: "All Evil Team Boss Battle Themes (Gen 1-8)", url: "https://www.youtube.com/watch?v=iza8Tck1Nao" },
      { title: "Team Rocket & Giovanni - Encounter & Battle Themes", url: "https://www.youtube.com/watch?v=G4vYhwnieY4" },
      { title: "All Credits/Ending Themes", url: "https://www.youtube.com/watch?v=FQuhvVV4Xyc" },
    ]
  },
  {
    name: "Sonic",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6dwfB4zNxgxDWiysn1gBjrpVYd47HTpioXuF2h7lnLzCgz40l0qOYnbZBAHbJxAMLn8",
    tracks: [
      { title: "Can You Feel the Sunshine - Sonic R", url: "https://www.youtube.com/watch?v=ieMqJi6UOK8" },
      { title: "Super Sonic Racing - Sonic R", url: "https://www.youtube.com/watch?v=Axa136sdB9Y" },
      { title: "Green Hill Zone - Sonic", url: "https://www.youtube.com/watch?v=5oFidKzYi8c" },
      { title: "Chemical Plant Zone - Sonic 2", url: "https://www.youtube.com/watch?v=bap3oxumEss" },
      { title: "Mystic Cave Zone - Sonic 2", url: "https://www.youtube.com/watch?v=3Biwww6t4i0" },
      { title: "Hydrocity Zone (Act 1) - Sonic 3", url: "https://www.youtube.com/watch?v=txbeP9mvgks" },
      { title: "Final Boss - Sonic 3", url: "https://www.youtube.com/watch?v=kY47bNAryPk" },
      { title: "Flying Battery Zone (Act 2) - Sonic & Knuckles", url: "https://www.youtube.com/watch?v=GaF0fKnuIVs" },
      { title: "Sandopolis Zone (Act 1) - Sonic & Knuckles", url: "https://www.youtube.com/watch?v=sT6POlmybPw" },
      { title: "Doomsday Zone - Sonic 3 & Knuckles", url: "https://www.youtube.com/watch?v=WxAMHdalv9E" },
    ]
  },
  {
    name: "Soul Calibur",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp8G2EJP0LgIzwdJ4mRdAu61KUo_xeiKiJ62wfKg3JO4eHJNaJ3JGWPZNoqXBqEbU1AVc",
    tracks: [
      { title: "Soul Blade - The Edge of Soul (Intro Theme)", url: "https://www.youtube.com/watch?v=vbTsj_hEPbY" },
      { title: "Soul Blade/Edge - Recollect Continent (Extended)", url: "https://www.youtube.com/watch?v=eK0RPaM5Eog" },
      { title: "Soulcalibur III - Ephemeral Dream (Extended)", url: "https://www.youtube.com/watch?v=4AF5QPpKe6s" },
      { title: "Soulcalibur II Opening (HQ Remastered)", url: "https://www.youtube.com/watch?v=C_Evc5IPJZk" },
    ]
  },
  {
    name: "Street Fighter",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc1suCH8JTQWIXdp9iE5J-BFT4ArkR0o9ftCZrit_QE43OnSAjRjd_-8eD1yNknLAM_A",
    tracks: [
      { title: "Guile - Street Fighter II", url: "https://www.youtube.com/watch?v=qb5yxW1BJJw" },
      { title: "Ken - Street Fighter II", url: "https://www.youtube.com/watch?v=Yw3Of6bSQbI" },
      { title: "Ryu - Street Fighter II", url: "https://www.youtube.com/watch?v=onfXKe_UMAY" },
      { title: "Cammy - Super Street Fighter II", url: "https://www.youtube.com/watch?v=wUmEmMprh40" },
      { title: "Vega Stage - Super Smash Bros. Ultimate", url: "https://www.youtube.com/watch?v=kAdiMbqVKDM" },
      { title: "Ken - Street Fighter Alpha", url: "https://www.youtube.com/watch?v=U-Ti6JrKAR4" },
      { title: "Ryu - Street Fighter Alpha", url: "https://www.youtube.com/watch?v=GFbN4UaN6D8" },
      { title: "Charlie - Street Fighter Alpha", url: "https://www.youtube.com/watch?v=RLfluoRkMeQ" },
      { title: "M. Bison - Street Fighter Alpha", url: "https://www.youtube.com/watch?v=xNeKkOFTEaM" },
      { title: "The Circuit Hugo's Stage - SF III 3rd Strike", url: "https://www.youtube.com/watch?v=gXy0R13upEw" },
      { title: "The Beep Remy's Stage - SF III 3rd Strike", url: "https://www.youtube.com/watch?v=EeYcHMCmudQ" },
      { title: "You Blow My Mind Dudsley - SF III 3rd Strike", url: "https://www.youtube.com/watch?v=hQTgyI5iTPU" },
      { title: "Jazz NYC '99 Ken - SF III 3rd Strike", url: "https://www.youtube.com/watch?v=-4TXo7HXJeU" },
      { title: "Character Select Theme - SF 3rd Strike", url: "https://www.youtube.com/watch?v=Qw88zQTxq48" },
    ]
  },
];

CATEGORIES.forEach(cat => cat.tracks.sort((a, b) => a.title.localeCompare(b.title, 'fr')));

// ════════════════════════════════════════════════════════
//  Lecteur — ne pas modifier en dessous
// ════════════════════════════════════════════════════════

const audio = new Audio();
let currentCategory   = null;
let currentTrackIndex = -1;

// ── Références DOM ──────────────────────────────────────
const categorySelect = document.getElementById('category-select');
const trackList      = document.getElementById('track-list');
const videoContainer = document.getElementById('video-container');
const ytIframe       = document.getElementById('yt-iframe');
const artBox         = document.getElementById('art-box');
const scControls     = document.getElementById('sc-controls');
const volDownBtn     = document.getElementById('vol-down');
const volUpBtn       = document.getElementById('vol-up');
const volMuteBtn     = document.getElementById('vol-mute');

// ── Volume SoundCloud ──────────────────────────────────
let scVolume = 80;
let scMuted  = false;
let scWidget = null;

function loadSCApi(cb) {
  if (window.SC) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://w.soundcloud.com/player/api.js';
  s.onload = cb;
  document.head.appendChild(s);
}

function initSCWidget() {
  scWidget = SC.Widget(ytIframe);
  scWidget.bind(SC.Widget.Events.READY, () => scWidget.setVolume(scVolume));
}

function applyVolume() {
  if (scWidget) scWidget.setVolume(scMuted ? 0 : scVolume);
  if (scMuted || scVolume === 0) volMuteBtn.textContent = '🔇';
  else if (scVolume < 34)        volMuteBtn.textContent = '🔈';
  else if (scVolume < 67)        volMuteBtn.textContent = '🔉';
  else                           volMuteBtn.textContent = '🔊';
}

volDownBtn.addEventListener('click', () => {
  scVolume = Math.max(0, scVolume - 10);
  scMuted  = false;
  applyVolume();
});

volUpBtn.addEventListener('click', () => {
  scVolume = Math.min(100, scVolume + 10);
  scMuted  = false;
  applyVolume();
});

volMuteBtn.addEventListener('click', () => {
  scMuted = !scMuted;
  applyVolume();
});

// ── Peuple le <select> ─────────────────────────────────
function buildCategories() {
  CATEGORIES.forEach((cat, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = cat.name;
    categorySelect.appendChild(opt);
  });

  categorySelect.addEventListener('change', () => {
    const val = categorySelect.value;
    if (val === '') return;
    selectCategory(parseInt(val));
  });
}

// ── Sélectionne une catégorie ──────────────────────────
function selectCategory(index) {
  currentCategory = index;
  const cat = CATEGORIES[index];

  // Mise à jour de la pochette
  if (cat.cover) {
    artBox.style.backgroundImage    = `url('${cat.cover}')`;
    artBox.style.backgroundSize     = '100% 100%';
    artBox.style.backgroundPosition = 'center';
    artBox.textContent = '';
  } else {
    artBox.style.backgroundImage = '';
    artBox.textContent = '♪';
  }

  trackList.innerHTML = '';
  cat.tracks.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = 'track-item';

    const num = document.createElement('span');
    num.className = 'track-num';
    num.textContent = String(i + 1).padStart(2, '0');

    const title = document.createElement('span');
    title.className = 'track-title';
    title.textContent = track.title;

    item.appendChild(num);
    item.appendChild(title);

    if (!track.url) {
      const badge = document.createElement('span');
      badge.className = 'badge-nourl';
      badge.textContent = 'URL manquante';
      item.appendChild(badge);
    } else {
      item.addEventListener('click', () => playTrack(index, i));
    }

    trackList.appendChild(item);
  });
}

// ── Détection du type d'URL ────────────────────────────
function extractYTId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function isSoundCloud(url) {
  return /soundcloud\.com\//i.test(url);
}

// ── Lance la lecture ───────────────────────────────────
function playTrack(catIndex, trackIndex) {
  const track = CATEGORIES[catIndex].tracks[trackIndex];
  if (!track.url) return;

  currentCategory   = catIndex;
  currentTrackIndex = trackIndex;

  // Surligne la piste active
  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('active', i === trackIndex);
  });

  const ytId = extractYTId(track.url);

  if (ytId) {
    // YouTube → iframe YouTube
    audio.pause();
    audio.src = '';
    scWidget = null;
    scControls.classList.remove('visible');
    ytIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
    videoContainer.classList.add('visible');
  } else if (isSoundCloud(track.url)) {
    // SoundCloud → widget SoundCloud + bouton volume
    audio.pause();
    audio.src = '';
    scVolume = 80;
    scMuted  = false;
    volMuteBtn.textContent = '🔊';
    ytIframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&auto_play=true&hide_related=true&show_comments=false&visual=true`;
    videoContainer.classList.add('visible');
    scControls.classList.add('visible');
    ytIframe.onload = () => loadSCApi(initSCWidget);
  } else {
    // Lien direct (.mp3, etc.) → balise audio
    scWidget = null;
    scControls.classList.remove('visible');
    ytIframe.src = '';
    videoContainer.classList.remove('visible');
    audio.src = track.url;
    audio.play();
  }
}

// ── Piste suivante (auto-avance pour l'audio) ──────────
function nextTrack() {
  if (currentCategory === null) return;
  const tracks = CATEGORIES[currentCategory].tracks;
  let i = currentTrackIndex + 1;
  while (i < tracks.length && !tracks[i].url) i++;
  if (i < tracks.length) playTrack(currentCategory, i);
}

audio.addEventListener('ended', nextTrack);

// ── Init ───────────────────────────────────────────────
buildCategories();
