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
    name: "Blazblue",
    cover: "https://n-gamz.com/wp-content/uploads/2016/11/blazblue-central-fiction-test-review-screen-logo.jpg",
    tracks: [
      { title: "Calamity Trigger - Arcade", url: "https://www.youtube.com/watch?v=VFylEGx0AlM" },
      { title: "Calamity Trigger", url: "https://www.youtube.com/watch?v=VFylEGx0AlM" },
      { title: "Calamity Trigger - Extended", url: "https://www.youtube.com/watch?v=emufl2KhNqA" },
      { title: "CentralFiction - In the Shadows", url: "https://www.youtube.com/watch?v=SuQjb4nQe40" },
      { title: "Chrono Phantasma - Arcade", url: "https://www.youtube.com/watch?v=KFY6e1b4hSk" },
      { title: "Chrono Phantasma - Opening", url: "https://www.youtube.com/watch?v=ssQv6mfuLM4" },
      { title: "Chrono Phantasma - Opening Extended", url: "https://www.youtube.com/watch?v=6_XXTCHeTp4" },
      { title: "Chrono Phantasma v2.0 - Arcade", url: "https://www.youtube.com/watch?v=MhFTGvZddyo" },
      { title: "Continuum Shift 2", url: "https://www.youtube.com/watch?v=_vfQS64S9aQ" },
      { title: "Continuum Shift 2 - Opening Extended", url: "https://www.youtube.com/watch?v=6cG5MZ4avRo" },
      { title: "Continuum Shift 2 Extend", url: "https://www.youtube.com/watch?v=eeQIPbgdTQU" },
      { title: "Continuum Shift", url: "https://www.youtube.com/watch?v=QsbjKVx_8-s" },
    ]
  },
  {
    name: "Classic / Opéra",
    cover: "https://static.actu.fr/uploads/2023/08/fbc68a58bce46efc68a58bce4b3d68v-960x640.jpg",
    tracks: [
      { title: "Aram Khachaturian - Sabre Dance", url: "https://www.youtube.com/watch?v=gqg3l3r_DRI" },
      { title: "Boléro - Maurice Ravel", url: "https://www.youtube.com/watch?v=r30D3SW4OVw" },
      { title: "Eugen Doga - Gramofon Waltz/Gramophone", url: "https://www.youtube.com/watch?v=1p0pe-1_xUk" },
      { title: "Freedom To Move (Domino Theory Remix)", url: "https://www.youtube.com/watch?v=Ta2crGpWETk" },
      { title: "Merry-Go-Round of Life - Joe Hisaishi", url: "https://www.youtube.com/watch?v=f7SS57LFPco" },
      { title: "Lacrimosa - Wolfgang Amadeus Mozart", url: "https://www.youtube.com/watch?v=k1-TrAvp_xs" },
      { title: "Nocturne op.9 No.2 - Chopin", url: "https://www.youtube.com/watch?v=9E6b3swbnWg" },
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
    name: "Film",
    cover: "https://cerhic.hypotheses.org/files/2016/11/musique-film-beberanol-copie-634x372.png",
    tracks: [
      { title: "Adele - Skyfall", url: "https://www.youtube.com/watch?v=LJzp_mDxaT0" },
      { title: "Clubbed to Death - Matrix", url: "https://www.youtube.com/watch?v=20TX1VlWtzw" },
      { title: "Rob Dougan - Chateau Extended", url: "https://www.youtube.com/watch?v=KCNOe7s1lD0" },
      { title: "Star Wars - Duel of the Fates", url: "https://www.youtube.com/watch?v=g_BB0tj4tf8" },
    ]
  },
  {
    name: "Final Fantasy",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ81Qx2wTdn8p9WDEfYAVXzXgdKFm-cfyHlMgS4NF_A7gH8DEL56lo8sJQamvpSE2a_nw",
    tracks: [
      { title: "Battle Theme - Final Fantasy V", url: "https://www.youtube.com/watch?v=u7ee_xrawZs" },
      { title: "Cosmo Canyon - FF7", url: "https://www.youtube.com/watch?v=F6mgso2LfCg" },
      { title: "FF Tactics Advance - Undefeated Heart", url: "https://www.youtube.com/watch?v=QIGMzr7Yj1k" },
      { title: "FF Tactics Advance - Unavoidable Destiny", url: "https://www.youtube.com/watch?v=e6Mzx1W6VK4" },
      { title: "FF Tactics Advance - Painful Battle", url: "https://www.youtube.com/watch?v=1o1Cbhe3GqY" },
      { title: "FF7 - Fight theme", url: "https://www.youtube.com/watch?v=7HV3oyxr0Eg" },
      { title: "Fight On! Boss Battle - FF7", url: "https://www.youtube.com/watch?v=0VL1RXzyAsE" },
      { title: "Final Fantasy Battle Themes 1-14", url: "https://www.youtube.com/watch?v=-Xwk-yqHIvw" },
      { title: "Jenova - FF7", url: "https://www.youtube.com/watch?v=m9kGaw216HM" },
      { title: "Let the Battles Begin! - FF7 Extended", url: "https://www.youtube.com/watch?v=ufboXid14Q0" },
      { title: "Main Theme of Final Fantasy V", url: "https://www.youtube.com/watch?v=UYIafOKKo-I" },
    ]
  },
  {
    name: "Guilty Gear",
    cover: "https://i.ebayimg.com/images/g/XMIAAOSwt29kP0N-/s-l1200.jpg",
    tracks: [
      { title: "GGXRD Revelator - Area 42 [Dizzy]", url: "https://www.youtube.com/watch?v=ncWxpX8QM7U" },
      { title: "GGXX - A Solitude That Asks Nothing In Return", url: "https://www.youtube.com/watch?v=q5vNxUf27YM" },
      { title: "GGXX - Blue Water Blue Sky", url: "https://www.youtube.com/watch?v=qhpisRcYuZw" },
      { title: "GGXX - Burly Heart", url: "https://www.youtube.com/watch?v=L05wAbRJ5BQ" },
      { title: "GGXX - Existence", url: "https://www.youtube.com/watch?v=BVe78_xv1Lg" },
      { title: "GGXX - Still In The Dark", url: "https://www.youtube.com/watch?v=p_S43AP1tgc" },
      { title: "GGXX - The Midnight Carnival", url: "https://www.youtube.com/watch?v=LKJ9AVrpM9s" },
      { title: "GGXXAC+ - Keep the Flag Flying", url: "https://www.youtube.com/watch?v=52ApW6NIjRA" },
      { title: "GGXXAC+ - Keep In Gates [A.B.A.]", url: "https://www.youtube.com/watch?v=QyM3zU-_SNU" },
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
    name: "Hunter X Hunter",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07mV21CT4Ce7WFo0kmBskWVVjKdB5nWbXbMXPR3I3gkG4KJ1yU4DTbWOER6eEXMNV8zo",
    tracks: [
      { title: "Hunter X Hunter OST - Kingdom Of Predators", url: "https://www.youtube.com/watch?v=T8ex7oKbjhU" },
      { title: "Hunter x Hunter 2011 OST 3 - G.I Theme", url: "https://www.youtube.com/watch?v=KR2P_g_MXzk" },
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
    name: "Jeux Vidéo",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTli78tNVhAncK0HxrrxUJyf1oc4Ls-yjYsLeZqYwe-Io7wMPNQ84QfTZWIMy47E0QtR9w",
    tracks: [
      { title: "Ace Savage - Scheming (Extended Instrumental Slowed)", url: "https://www.youtube.com/watch?v=f6GAPrvKp2I" },
      { title: "Bloody Roar 3 - Into the Battlefield", url: "https://www.youtube.com/watch?v=rb9r7JW96ZU" },
      { title: "Bloody Roar 4 - Opening Demo", url: "https://www.youtube.com/watch?v=YwybO2DFm5c" },
      { title: "Daredevil (Extended) - Ace Combat 7", url: "https://www.youtube.com/watch?v=OYjlsO7-mzA" },
      { title: "Fortnite - You Don't Know Me Lobby", url: "https://www.youtube.com/watch?v=kWp5S7DrdfQ" },
      { title: "Horizon Zero Dawn - Aloy's Theme", url: "https://www.youtube.com/watch?v=P2JNQhAsIHA" },
      { title: "Rival Schools - Gedo High School", url: "https://www.youtube.com/watch?v=QPcCcorpTrg" },
      { title: "Rival Schools - Taiyo High School", url: "https://www.youtube.com/watch?v=5nW7q0Sv3jU" },
      { title: "SPARKING (Extended) - Tekken 5", url: "https://www.youtube.com/watch?v=9U2u31Bv_uk" },
      { title: "Star Fox - Corneria", url: "https://www.youtube.com/watch?v=oBD3FO6ozXc" },
      { title: "Streets Of New Meridian - Skullgirls", url: "https://www.youtube.com/watch?v=EY6-zgbQI6Y" },
      { title: "Tekken 3 - Hwoarang Theme", url: "https://www.youtube.com/watch?v=ZTzvLjEkMWE" },
      { title: "Tekken 5 - Moonlit Wilderness", url: "https://www.youtube.com/watch?v=ClvzNSejzXw" },
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
    name: "One Piece",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22Ql38iEey5v0tbjuX-Jpe7Wy0mpk5uYKeA",
    tracks: [
      { title: "One Piece - Fight Music Compilation (OST)", url: "https://www.youtube.com/watch?v=SYZao9qhyLI" },
      { title: "One Piece - Castle Karakuri Transform (Extended)", url: "https://www.youtube.com/watch?v=kVMvzIdkM-Q" },
      { title: "One Piece Opening 12", url: "https://www.youtube.com/watch?v=eS0hCgXMnT4" },
    ]
  },
  {
    name: "Ost Anime",
    cover: "https://media.cdnandroid.com/item_images/1131432/imagen-anime-music-ost-nightcore-and-j-pop-collection-0ori.jpg",
    tracks: [
      { title: "Sentai daishikkaku - opening 1 ", url: "https://www.youtube.com/watch?v=bG0cGW35-TI" },
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
    name: "Rap FR",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da847a76a28001f1de84e48e3356",
    tracks: [
      { title: "Art de Rue - Fonky Family", url: "https://www.youtube.com/watch?v=JQwxomwU1k4" },
      { title: "Au Summum - 113", url: "https://www.youtube.com/watch?v=U_h2obefiEk" },
      { title: "Ghetto Millionnaire - Black Mamba", url: "https://www.youtube.com/watch?v=lTqVCJRju_Q" },
      { title: "Laisse pas traîner ton fils - Suprême NTM", url: "https://www.youtube.com/watch?v=biYdUZXfz9I" },
      { title: "Nés sous la même étoile - IAM", url: "https://www.youtube.com/watch?v=rn_UjJN3YQU" },
      { title: "Pris pour cible - Sniper", url: "https://www.youtube.com/watch?v=LVUPOaDSjQQ" },
    ]
  },
  {
    name: "Rap US",
    cover: "https://i.scdn.co/image/ab67616d0000b273b74634bdd01a919a4fc55c47",
    tracks: [
      { title: "Act a Fool - Ludacris", url: "https://www.youtube.com/watch?v=qfjbe4RKbwQ" },
      { title: "Affirmative Action - Nas ft. Suprême NTM", url: "https://www.youtube.com/watch?v=1c8Hl12hLuc" },
      { title: "Arab Money - Busta Rhymes feat. Ron Brownz", url: "https://www.youtube.com/watch?v=-nvhPOFKB3o" },
      { title: "Back In The Game - Wu-Tang Clan", url: "https://www.youtube.com/watch?v=58HQeed8Vhg" },
      { title: "Blackstreet - No Diggity ft. Dr. Dre, Queen Pen", url: "https://www.youtube.com/watch?v=pdEZSC_oN-Q" },
      { title: "Desiigner - Panda", url: "https://www.youtube.com/watch?v=E5ONTXHS2mM" },
      { title: "Drop It Like It's Hot Snoop Dogg - ft. Pharrell Williams", url: "https://www.youtube.com/watch?v=GtUVQei3nX4" },
      { title: "Fazers - King Geedorah", url: "https://www.youtube.com/watch?v=LWN0vQpwcKM" },
      { title: "Gangsta's Paradise - Coolio", url: "https://www.youtube.com/watch?v=fPO76Jlnz6c" },
      { title: "I'm Not A Star - Rick Ross", url: "https://www.youtube.com/watch?v=O9f9iEy1XqQ" },
      { title: "If I Ruled the World - Nas", url: "https://www.youtube.com/watch?v=-8dyp89uWxA" },
      { title: "Industry Baby - Lil Nas X, Jack Harlow", url: "https://www.youtube.com/watch?v=HCq1OcAEAm0" },
      { title: "Nasty Girl - The Notorious B.I.G.", url: "https://www.youtube.com/watch?v=ufKxCclo7-c" },
      { title: "Pass The Courvoisier Part II - Busta Rhymes ft. P. Diddy, Pharrell", url: "https://www.youtube.com/watch?v=o4ZUaxyPoZ8" },
      { title: "Ridin - Chamillionaire", url: "https://www.youtube.com/watch?v=CtwJvgPJ9xw" },
      { title: "Simon Says - Pharoahe Monch", url: "https://www.youtube.com/watch?v=52PHX4m07aI" },
      { title: "Stand Up Ludacris - ft. Shawnna", url: "https://www.youtube.com/watch?v=pZG7IK99OvI" },
      { title: "Touch It Remix - Busta Rhymes", url: "https://www.youtube.com/watch?v=GDtn_FtU614" },
      { title: "Write This Down - 2Pac", url: "https://www.youtube.com/watch?v=pdEZSC_oN-Q" },
    ]
  },
  {
    name: "RnB",
    cover: "https://routenote.com/blog/wp-content/uploads/2025/01/1.-RNB-X.jpeg",
    tracks: [
      { title: "American Boy - Estelle (feat. Kanye West)", url: "https://www.youtube.com/watch?v=Ic5vxw3eijY" },
      { title: "Blu Cantrell - Breathe ft. Sean Paul", url: "https://www.youtube.com/watch?v=wfTC2o05OEw" },
      { title: "Beautiful Girls - Sean Kingston", url: "https://www.youtube.com/watch?v=7lBUiFdQLu0" },
      { title: "Can't Take My Eyes Off Of You - Lauryn Hill", url: "https://www.youtube.com/watch?v=wVzvXW9bo5U" },
      { title: "Everything Is Everything - Lauryn Hill", url: "https://www.youtube.com/watch?v=i3_dOWYHS7I" },
      { title: "If There's Any Justice - Lemar", url: "https://www.youtube.com/watch?v=35KXjhvUHuA" },
      { title: "Me Love - Sean Kingston", url: "https://www.youtube.com/watch?v=t130Gzik-RM" },
      { title: "Put It On Me - Ja Rule ft. Vita, Lil' Mo", url: "https://www.youtube.com/watch?v=JBGHFDbbios" },
      { title: "Ready or Not - Fugees", url: "https://www.youtube.com/watch?v=aIXyKmElvv8" },
      { title: "Run It - Chris Brown - ", url: "https://www.youtube.com/watch?v=w6QGe-pXgdI" },
      { title: "This Is How We Do It - Montell Jordan", url: "https://www.youtube.com/watch?v=0hiUuL5uTKc" },
      { title: "Wonderful - Ja Rule ft. R. Kelly, Ashanti", url: "https://www.youtube.com/watch?v=8NgA6bZUpcA" },
      { title: "You Got Me - The Roots", url: "https://www.youtube.com/watch?v=nR-nB3_-kpg" },
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
    name: "Pop",
    cover: "https://play-lh.googleusercontent.com/JpdeHAd9gPX17tKk3FuVmUTVK_nDiegf7Fdgwd8wtr-vWHyUqfCnCXRTBGkK6-fCVKtx",
    tracks: [
      { title: "Bad Guy - Billie Eilish", url: "https://www.youtube.com/watch?v=CkrkQmLiIbA" },
      { title: "Beggin - Madcon", url: "https://www.youtube.com/watch?v=WEaUmBOxDuE" },
      { title: "Beach Boys - I Get Around", url: "https://www.youtube.com/watch?v=wREBD2og5iY" },
      { title: "Blurred Lines - Robin Thicke ft. T.I., Pharrell", url: "https://www.youtube.com/watch?v=yyDUC1LUXSU" },
      { title: "The Boys are Back in Town - Thin Lizzy", url: "https://www.youtube.com/watch?v=hQo1HIcSVtg" },
      { title: "Call Me Maybe - Carly Rae Jepsen", url: "https://www.youtube.com/watch?v=fWNaR-rxAic" },
      { title: "Cheerleader - OMI", url: "https://www.youtube.com/watch?v=jGflUbPQfW8" },
      { title: "Doo Wop - Lauryn Hill", url: "https://www.youtube.com/watch?v=G5zirRc34Xc" },
      { title: "Don't Worry Be Happy - Bobby McFerrin", url: "https://www.youtube.com/watch?v=d-diB65scQU" },
      { title: "Don't Stop Me Now - Queen", url: "https://www.youtube.com/watch?v=hBp4dgE7Bho" },
      { title: "Freed From Desire - GALA", url: "https://www.youtube.com/watch?v=kHV_zePxnmY" },
      { title: "Give Me Everything Pitbull - ft. Ne-Yo, Afrojack, Nayer", url: "https://www.youtube.com/watch?v=EPo5wWmKEaI" },
      { title: "Iron - Woodkid", url: "https://www.youtube.com/watch?v=vSkb0kDacjs" },
      { title: "Somebody's Watching Me - Rockwell", url: "https://www.youtube.com/watch?v=7YvAYIJSSZY" },
      { title: "Starlight - The Supermen Lovers", url: "https://www.youtube.com/watch?v=ByK5qt0pRg8" },
      { title: "Timber - Pitbull ft. Ke$ha", url: "https://www.youtube.com/watch?v=hHUbLv4ThOo" },
      { title: "The Luck You Got - The High Strung", url: "https://www.youtube.com/watch?v=b3KuMFXm2xk" },
      { title: "Price Tag - Jessie J ft. B.o.B", url: "https://www.youtube.com/watch?v=qMxX-QOV9tI" },
      { title: "Run The Show - Kat DeLuna ft. Busta Rhymes", url: "https://www.youtube.com/watch?v=fhsHOlliExk" },
    ]
  },
  {
    name: "Shingeki No Kyojin",
    cover: "https://m.media-amazon.com/images/S/pv-target-images/abce4f3146841f9aa66e9963531ab38e64108ecaa79b93e5a2781c89c59ebaac.jpg",
    tracks: [
      { title: "Opening 1 - Guren no Yumiya", url: "https://www.youtube.com/watch?v=CbvQKBaDUWI&list=RDCbvQKBaDUWI&start_radio=1" },
      { title: "Opening 4 - Boku no Sensou", url: "https://www.youtube.com/watch?v=LV9CFlkEy1I" },
      { title: "Opening 7 - The Rumbling", url: "https://www.youtube.com/watch?v=9l9Wa-5ph6o" },
      { title: "Opening 7 (Extended)", url: "https://www.youtube.com/watch?v=tCUUcrtfyuU" },
      { title: "Season 4 - Epic Soundtrack Mix", url: "https://www.youtube.com/watch?v=ri6YWr03izo" },
      { title: "Shinzou wo Sasageyo | Season 2", url: "https://www.youtube.com/watch?v=iA7c314_SWM" },
      { title: "Shinzou wo Sasageyo | Season 3", url: "https://www.youtube.com/watch?v=wwfwjEroBXc" },
      { title: "SNK - Return to Revelio", url: "https://www.youtube.com/watch?v=sZyirQuRzbM" },
      { title: "The Rumbling - SiM", url: "https://www.youtube.com/watch?v=OBqw818mQ1E" },
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
      { title: "Soul Blade/Edge - Intro Extended", url: "https://www.youtube.com/watch?v=vbTsj_hEPbY" },
      { title: "Soul Blade/Edge - Intro", url: "https://www.youtube.com/watch?v=5Jscuco8zEk" },
      { title: "Soul Blade/Edge - Recollect Continent (Extended)", url: "https://www.youtube.com/watch?v=eK0RPaM5Eog" },
      { title: "Soulcalibur III - Ephemeral Dream (Extended)", url: "https://www.youtube.com/watch?v=4AF5QPpKe6s" },
      { title: "Soulcalibur III - Intro", url: "https://www.youtube.com/watch?v=suftVb4TaoI" },
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

CATEGORIES.sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }));
CATEGORIES.forEach(cat => cat.tracks.sort((a, b) => a.title.localeCompare(b.title, 'fr', { sensitivity: 'base' })));

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
const ytPlayerWrap   = document.getElementById('yt-player-wrap');
const scIframe       = document.getElementById('sc-iframe');
const artBox         = document.getElementById('art-box');
const artIcon        = document.getElementById('art-icon');
const scControls     = document.getElementById('sc-controls');
const volDownBtn     = document.getElementById('vol-down');
const volUpBtn       = document.getElementById('vol-up');
const volMuteBtn     = document.getElementById('vol-mute');

// ── Switch cover / vidéo en responsive ────────────────
function isMobile() { return window.innerWidth <= 600; }

function mobileShowVideo() {
  if (!isMobile()) return;
  document.body.classList.add('yt-mobile');
}

function mobileHideVideo() {
  if (!isMobile()) return;
  document.body.classList.remove('yt-mobile');
}

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
  scWidget = SC.Widget(scIframe);
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
    artIcon.style.display = 'none';
  } else {
    artBox.style.backgroundImage = '';
    artIcon.style.display = '';
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

  if (shuffleMode && !skipHistory && currentTrackIndex >= 0 && currentCategory === catIndex) {
    shuffleHistory.push(currentTrackIndex);
  }
  skipHistory = false;

  currentCategory   = catIndex;
  currentTrackIndex = trackIndex;

  // Surligne la piste active
  document.querySelectorAll('.track-item').forEach((el, i) => {
    el.classList.toggle('active', i === trackIndex);
  });

  const ytId = extractYTId(track.url);

  if (ytId) {
    audio.pause();
    audio.src = '';
    scWidget = null;
    scControls.classList.remove('visible');
    scIframe.classList.remove('visible');
    scIframe.src = '';
    stopYTTime();
    ytPlayerWrap.classList.add('visible');
    videoContainer.classList.add('visible');
    mobileShowVideo();
    ensureYTPlayer(ytId);
  } else if (isSoundCloud(track.url)) {
    audio.pause();
    audio.src = '';
    scVolume = 80;
    scMuted  = false;
    volMuteBtn.textContent = '🔊';
    stopYTTime();
    ytPlayerWrap.classList.remove('visible');
    if (ytPlayer) ytPlayer.pauseVideo();
    scIframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&auto_play=true&hide_related=true&show_comments=false&visual=true`;
    scIframe.classList.add('visible');
    videoContainer.classList.add('visible');
    scControls.classList.add('visible');
    mobileHideVideo();
    scIframe.onload = () => loadSCApi(initSCWidget);
  } else {
    scWidget = null;
    scControls.classList.remove('visible');
    scIframe.src = '';
    scIframe.classList.remove('visible');
    stopYTTime();
    ytPlayerWrap.classList.remove('visible');
    if (ytPlayer) ytPlayer.pauseVideo();
    videoContainer.classList.remove('visible');
    mobileHideVideo();
    audio.src = track.url;
    audio.play();
  }
}

// ── YouTube IFrame API ─────────────────────────────────
let ytPlayer      = null;
let ytApiReady    = false;
let pendingYtId   = null;
let ytTimeTimer   = null;

function ensureYTPlayer(videoId) {
  if (ytApiReady) {
    if (ytPlayer) { ytPlayer.loadVideoById(videoId); }
    else          { createYTPlayer(videoId); }
  } else {
    pendingYtId = videoId;
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(s);
    }
  }
}

window.onYouTubeIframeAPIReady = function() {
  ytApiReady = true;
  if (pendingYtId) { createYTPlayer(pendingYtId); pendingYtId = null; }
};

function createYTPlayer(videoId) {
  ytPlayer = new YT.Player('yt-player', {
    videoId,
    playerVars: { autoplay: 1, rel: 0 },
    events: { onStateChange: onYTStateChange }
  });
}

function onYTStateChange(e) {
  if (e.data === YT.PlayerState.PLAYING) {
    document.getElementById('yt-controls-bar').classList.add('visible');
    clearInterval(ytTimeTimer);
    ytTimeTimer = setInterval(() => {
      if (!ytPlayer || typeof ytPlayer.getCurrentTime !== 'function') return;
      const cur = ytPlayer.getCurrentTime();
      const dur = ytPlayer.getDuration();
      document.getElementById('yt-time').textContent = fmtTime(cur) + ' / ' + fmtTime(dur);
    }, 1000);
  } else if (e.data === YT.PlayerState.ENDED) {
    if (loopMode) { ytPlayer.seekTo(0); ytPlayer.playVideo(); }
    else nextTrack();
  }
}

function stopYTTime() {
  clearInterval(ytTimeTimer);
  ytTimeTimer = null;
  const bar = document.getElementById('yt-controls-bar');
  if (bar) bar.classList.remove('visible');
  const t = document.getElementById('yt-time');
  if (t) t.textContent = '';
}

function fmtTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return m + ':' + String(s).padStart(2, '0');
}

// ── Contrôles de lecture ───────────────────────────────
let loopMode       = false;
let shuffleMode    = false;
let shuffleHistory = [];
let skipHistory    = false;

function nextTrack() {
  if (currentCategory === null) return;
  const tracks = CATEGORIES[currentCategory].tracks;
  if (shuffleMode) {
    const pool = tracks.map((t, i) => i).filter(i => tracks[i].url && i !== currentTrackIndex);
    if (!pool.length) return;
    playTrack(currentCategory, pool[Math.floor(Math.random() * pool.length)]);
  } else {
    let i = currentTrackIndex + 1;
    while (i < tracks.length && !tracks[i].url) i++;
    if (i >= tracks.length) {
      i = 0;
      while (i < tracks.length && !tracks[i].url) i++;
    }
    if (i < tracks.length) playTrack(currentCategory, i);
  }
}

function prevTrack() {
  if (currentCategory === null || currentTrackIndex < 0) return;
  if (shuffleMode && shuffleHistory.length > 0) {
    skipHistory = true;
    playTrack(currentCategory, shuffleHistory.pop());
    return;
  }
  const tracks = CATEGORIES[currentCategory].tracks;
  let i = currentTrackIndex - 1;
  while (i >= 0 && !tracks[i].url) i--;
  if (i < 0) {
    i = tracks.length - 1;
    while (i >= 0 && !tracks[i].url) i--;
  }
  if (i >= 0) playTrack(currentCategory, i);
}

function toggleShuffle() {
  shuffleMode = !shuffleMode;
  shuffleHistory = [];
  const btn = document.getElementById('btn-shuffle');
  btn.classList.toggle('on', shuffleMode);
  btn.textContent = shuffleMode ? '✦' : '✧';
}

audio.addEventListener('ended', () => {
  if (loopMode) { audio.currentTime = 0; audio.play(); }
  else nextTrack();
});

document.getElementById('btn-next').addEventListener('click', nextTrack);
document.getElementById('btn-prev').addEventListener('click', prevTrack);
document.getElementById('btn-loop').addEventListener('click', () => {
  loopMode = !loopMode;
  document.getElementById('btn-loop').classList.toggle('on', loopMode);
});
document.getElementById('btn-shuffle').addEventListener('click', toggleShuffle);

// ── Init ───────────────────────────────────────────────
buildCategories();
