function initMap() {
var uluru = {lat: 34.0717487, lng: -117.5925061};
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 11,
  center: uluru
});
var infowindow = new google.maps.InfoWindow({
    content: '<p>Huck Finn Jubilee</p>'
  });
    
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ],
    {name: 'Styled Map'});

    map.mapTypes.set('styled_map', styledMapType);
    
    
    map.setMapTypeId('styled_map');

        var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Huck Finn Jubilee'
    });
    infowindow.open(map, marker);
}






$(document).ready(function () {
    
    
    $('.slider-init').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
         infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 700
    });
    
    $('.click-modal-xs').click(function(){
        $('#modal-menu').modal('show');
        
    });
    
    $('.close-menu').click(function(){
        $('#modal-menu').modal('hide');
    });
    
    $('.xs-open-close-icon').click(function(){
        
        if(!$(this).parents('.xs-open-close').hasClass('opened')){
            $(this).parents('.xs-open-close').addClass('opened');
            
        }
        else{
            $(this).parents('.xs-open-close').removeClass('opened');
        }
    });
    
    
    $('.line_up_wrap div').click(function(e) {
      if ($(this).attr('id') != '') {
        $('#line_up_modal h3').html($(this).text());
        $('#line_up_modal .img').html('<img src="img/line-up/'+$(this).attr('id')+'.jpg" class="img-responsive">');
        $('#line_up_modal .text').html(lineup[$(this).attr('id')]);
        $('#line_up_modal').modal('show');
      }
    });

});

var lineup = {
  'line_up7': '<p>Balsam Range is; Buddy Melton (fiddle, lead and tenor vocals), Darren Nicholson (mandolin, octave mandolin, lead vocals, baritone and low tenor vocals), Dr. Marc Pruett (banjo), Tim Surrett (bass, dobro, baritone and lead vocals), and Caleb Smith (guitar, lead & baritone vocals). The five original members are all acoustic musicians and singers from western North Carolina. They thoughtfully and respectfully adopted the name of a majestic range of mountains that surround part of their home county of Haywood, NC where the Great Smoky Mountains meet the Blue Ridge, the Great Balsam Range.</p><p>The members of Balsam Range are extremely proud of their home of Haywood County, NC and invite you all to come visit their beautiful part of the country!</p><p>The group’s ascent to the top of the Bluegrass world has left a well-marked trail of success since the band’s inception in 2007. One of the genre’s most award-winning artists in recent years, they have garnered ten International Bluegrass Music Association Awards on the heels of six critically acclaimed albums. Balsam Range has left audiences spellbound while headlining major festivals from coast to coast, selling out venues across the nation, and appearing multiple times at the Grand Ole Opry.</p><p>On their newest release, “Mountain Voodoo”, the quintet cleverly captures traditional yet contemporary sounds. There are fiery instrumental parts alternating with deep heavy ballads, overlaid by the vocal harmonies the group has become known for.  Debuting at number four, “Mountain Voodoo” remained on the Billboard chart for nineteen weeks. Three singles from the album have reached the number one spot on the Bluegrass Today Charts including “Blue Collar Dreams” which spent 3 consecutive months at the number one spot</p>',
  'line_up9': '<p>Highly esteemed bluegrass band Blue Highway has earned a collective 27 IBMA Awards, 6 SPBGMA Awards, one Dove Award, plus three Grammy nominations as a band, in addition to two prestigious Grammy Awards among its current members.</p><p>Blue Highway\'s newly released album "Original Traditional"  is nominated for a 2017 GRAMMY Award for Best Bluegrass Album.</p><p>Blue Highway was voted the Favorite Bluegrass Artist of All Time by the readers of Bluegrass Today in April 2016.</p><p>Wayne Taylor was the 2016 Inductee into the Virginia Country Music Hall of Fame, alongside legends like Patsy Cline, the Statler Brothers,  Jimmy Dean, Mother Maybelle Carter, and Roy Clark.</p><p>Tim Stafford received honors as 2015 SPBGMA Guitar Player of the Year and 2014 IBMA Songwriter of the Year, and Shawn Lane was nominated as 2015 IBMA Songwriter of the Year.</p><p>Blue Highway charted the Most Radio Airplay of any Bluegrass Artist in 2014, per the  2014 Bluegrass Radio Airplay Chart, storming national airplay charts with their heralded album The Game.</p>',
  'line_up11': '<p>An acoustic band born in the land of tech innovation, Front Country was unlikely to be accepted as an authentic American roots band out of the gate. Cutting their teeth in progressive bluegrass jams in San Francisco’s Mission District and rehearsing across the bay in Oakland, they fashioned their own take on roots music and Indie Folk, with the tools they had on hand. A mandolinist with a degree in composition and classical guitar. A guitarist trained in rock and world music. A bassist equally versed in jazz and newgrass. A violinist with technique that could seamlessly hop between honky tonk and electropop. And a female lead singer with grit and soul that was also a multi-instrumentalist and songwriter. In a wood-paneled country dive bar in the shadow of the San Francisco skyline, Front Country forged a sound hell bent on merging the musical past with the future. The result lies somewhere between Indie Folk and Americana, in a nether-region they\'ve come to embrace as their own. This West Coast outfit was just a group of friends playing a monthly gig until 2012 and 2013 when Front Country gathered around a single microphone at the RockyGrass and Telluride festivals, and won first prize in those prestigious band contests that once launched the careers of the Dixie Chicks, Greensky Bluegrass and the Steep Canyon Rangers. The contest wins bolstered their confidence in their unique mix of original songwriting, vocal harmonies and instrumental virtuosity, steeling their resolve to take a leap of faith and become a full time touring band. With the release of their debut full-length album Sake of the Sound in 2014, Front Country began the nose-grinding work of making their name as a national touring act. Still based in the San Francisco Bay Area, they would trek the 6,000+ mile circle around the U.S. for months at a time, introducing themselves for the first time to every room that would have them. Thanks to the glow of their contest wins, festivals around the U.S. caught wind and invited them to play for their large audiences, giving Front Country a crucial first break. Old Settlers in Austin, MerleFest in North Carolina, Wintergrass in Seattle, Strawberry in California and Grey Fox in New York, all took a chance on the promising new band and solidified Front Country’s hold on the imagination of progressive-leaning acoustic music fans. If there was any one song from their debut album that they all agreed they had never heard the likes of before, it would have to be the title track “Sake of the Sound”. A pop song with a rock arrangement, played entirely on acoustic instruments. It was almost as if bluegrass instruments had been unearthed 200 years from now in a time capsule, and were repurposed to make post-apocalyptic modern pop music. Front Country has been drawn more and more into this peculiar aesthetic, writing and arranging songs that are simultaneously intricate, intense and infectious. They\'ve been called “Roots Pop”: the past is discernible with a wink and a nod, and the future is here. Front Country’s sophomore release Other Love Songs is their Roots Pop opus. A graduation from mere concept to a high-speed rail line traveling at breakneck speed with the listener able to walk to the back of the train and look out at a distant but constant glimmer of the past. While their ultimate goal is musical space exploration, the technology of Front Country’s sound has evolved significantly in their five short years as a band, all while maintaining a tool kit of wooden string band instruments. Like a carpenter building a rocket ship, there is a whimsy to Front Country’s perspective that takes an active, imaginative listener to appreciate. It’s not a sound based on current trends of what any mainstream audience has asked for, it is a new perspective looking to find a new audience. Creating one’s own audience from the ground up is never an easy path, but if successful, several decades later, the reward is worth the risk and the journey is its own reward. Other Love Songs is Front Country’s first record relying on lead singer Melody Walker’s songwriting, first and foremost. With 8 of the 12 tracks penned by Walker, and the two instrumentals composed by mandolinist Adam Roszkiewicz, it is their most original body of work yet. Round out the intensely creative band arrangement style of guitarist Jacob Groopman, bassist Jeremy Darrow and five-string violinist Leif Karlstrom, and the synergy is electric. The two cover songs on the album are the poignant “Millionaire” by David Olney, and a swampy blues-rock reimagining of the Carter Family’s “Storms are on the Ocean”. All together, the majority of the songs are quite emotional in nature and tend toward relationship themes, sometimes with atwist, hence the title Other Love Songs. The collection of original Other Love Songs on the album are “If Something Breaks”, “I Don’t Wanna Die Angry”, “Good Side”, “Undone”, “O Heartbreaker” and “Keep Travelin’”. These songs follow the lessons that everyone learns in their own personal evolution toward emotional maturity and vulnerability - in which all of us learn to break down toxic romantic fairy tales and write our own “Other Love Songs” that work for real people in the real world. Love works the best when we can accept ourselves and one another with all of our virtues and our flaws, and start creating our own unique path that works for us. Since music and love are borne of the same ether, it’s no surprise that Front Country’s musical path has taken the form of an “Other Love Song” all along, finding their own harmony that plays to the strengths of each member, and doesn’t worry about fitting into a mold.</p>',
  'line_up6': '<p>On  their  fifth  full-length,  Watching  It  All  Fall  Apart,  Fruition  transform  pain  and  heartache  into  something  truly  glorious.  With  their  songwriting  sharper  and  more  nuanced  than  ever  before—and  their  sonic  palette  more  daringly  expansive—the  Portland,  Oregon-based  band’s  full-hearted  intensity  ultimately  gives  the  album  a  transcendent  power.</p><p>“The  songs  are  mostly  breakup  songs,”  says  Asebroek.  “There  was  love  and  now  it’s  gone—we  fucked  it  up,  or  some  outside  circumstance  brought  it  to  an  end.  It’s  about  dealing  with  all  that  but  still  having  hope  in  your  heart,  even  if  you’re  feeling  a  little  lost  and  jaded.”</p><p>In  a  departure  from  their  usual  DIY  approach,  Fruition  teamed  up  with  producer/mixer  Tucker  Martine  (My  Morning  Jacket,  The  Decemberists,  First  Aid  Kit,  case/lang/veirs)  to  adorn  their  folk-rooted  sound  with  delicately  crafted  elements  of  psychedelia  and  soul.  Showcasing  the  sublime  harmonies  the  band  first  discovered  during  an  impromptu  busking  session  in  2008,  Watching  It  All  Fall  Apart  also  finds  Fruition  more  fully  embracing  their  rock-and-roll  sensibilities  and  bringing  a  gritty  vitality  to  each  track.  “We’ve  been  a  band  almost  ten  years  now,  and  we’re  at  the  point  of  being  comfortable  in  our  skin  and  unafraid  to  be  whatever  we  want  as  time  goes  on,”  Anderson  notes. </p><p>Recorded  in  ten  days  at  Flora  Recording  &  Playback  in  Portland,  Watching  It  All  Fall  Apart  came  to  life  with  the  same  kinetic  urgency  found  in  Fruition’s  live  sound.  “It’s  kind  of  an  impossible  task,  this  idea  of  transmuting  the  live  energy  into  something  you  can  play  on  your  stereo,  but  I  feel  like  this  record  comes  close  to  that,”  says  Asebroek.  At  the  same  time,  the  band  pursued  a  purposeful  inventiveness  that  resulted  in  their  most  intricately  textured  work  to  date.  “Tucker  helped  us  push  ourselves  to  create  something  that  glistens  in  subtle  little  ways  that  you  might  not  even  pick  up  on  at  first,”  says  Asebroek.  “We  got  to  play  around  with  all  this  analog  gear  and  these  weird  old  keyboards  we  wouldn’t  ordinarily  use,  like  a  bunch  of  kids  in  a  toy  store  where  everything  is  free.”</p><p>On  lead  single  “I’ll  Never  Sing  Your  Name,”  that  unrestrained  creativity  manifests  in  a  fuzzed-out,  gracefully  chaotic  track  complete  with  sing-along-ready  chorus.  Built  on  brilliantly  piercing  lyrics  (“And  all  those  kisses  that  you  were  blowing/Somehow  they  all  got  blown  right  out”),  the  song  echoes  the  album’s  emotional  arc  by  painfully  charting  the  journey  from  heartache  to  acceptance.  “It’s  about  going  through  a  breakup,  moping  around,  and  then  finally  getting  to  the  point  where  it’s  like,  ‘Okay—I’m  done  with  feeling  this  way  now,’”  says  Anderson. </p><p>Throughout  Watching  It  All  Fall  Apart,  the  band’s  let-the-bad-times-roll  mentality  reveals  itself  in  ever-shifting  tones  and  moods.  On  the  stark  and  sleepy  “Northern  Town,”  Naja’s  smoldering  vocals  channel  the  ache  of  longing,  the  track’s  twangy  guitar  lines  blending  beautifully  with  its  swirling  string  arrangement.  One  of  the  few  album  cuts  to  have  already  appeared  in  Fruition’s  setlist,  “There  She  Was”  sheds  the  heavy  funk  influence  of  its  live  version  and  gets  reimagined  as  a  shimmering,  soulful  number  documenting  Asebroek’s  real-life  run-in  with  an  ex  at  a  local  bar.  Meanwhile,  “Turn  to  Dust”  emerges  as  a  weary  but  giddy  piece  of  psych-pop  chronicling  the  end  of  a  failed  romance.  The  song’s  opening  lyric  also  lends  the  album  its  title,  which  partly  serves  as  “a  commentary  on  the  general  state  of  the  world  today,”  according  to  Asebroek.  “Even  if  you’re  mostly  an  optimistic  person,  it’s  hard  not  to  feel  down  when  you  look  at  all  the  insanity  happening  right  now,”  he  says. </p><p>While  those  unflinchingly  intimate  breakup  songs  form  the  core  of  Watching  It  All  Fall  Apart,  Fruition  infuse  an  element  of  social  commentary  into  songs  like  “FOMO”  as  well.  Written  on  the  Fourth  of  July,  with  its  references  to  wasted  white  girls  and  cocaine  cowboys,  the  mournful  yet  strangely  reassuring  track  unfolds  as  what  Anderson  calls  “an  anti-party  party  song.”“It’s  about  one  of  those  situations  where  you  said  you’d  go  to  party  but  you  really  don’t  want  to  go,  because  you  know  it’s  going  to  be  the  same  old  bullshit,”  he  says.  “The  song  is  a  call  to  defuse  that  guilt  in  your  brain.”  And  on  the  sweetly  uplifting  “Let’s  Take  It  Too  Far,”  the  band  offers  one  of  the  album’s  most  purely  romantic  moments  by  paying  loving  tribute  to  music  as  solace  and  salvation  (“But  don’t  you  worry  ’bout  dyin’/’Cause  there’s  no  better  way  to  go/We’ll  sing  until  we’re  out  of  honey/Then  pour  the  gravel  down  our  throats”).</p><p>From  song  to  song,  Fruition  display  the  dynamic  musicality  they’ve  shown  since  making  their  debut  with  2008’s  Hawthorne  Hoedown  LP.  Through  the  years,  the  band  has  evolved  from  a  rootsy,  string-centric  outfit  to  a  full-fledged  rock  act,  eventually  taking  the  stage  at  such  major  festivals  asBonnaroo  and  Telluride  Bluegrass  (a  set  that  inspired  Rolling  Stone  to  praise  their  “raucous  originals  filled  with  heartfelt  lyrics  and  stadium-worthy  energy”).  Following  the  release  of  2016’s  Labor  of  Love,  Fruition  again  made  the  rounds  at  festivals  across  the  U.S.,  prompting  Rolling  Stone  to  feature  the  band  on  its  “8  Best  Things  We  Saw”  at  DelFest  2016.</p><p>In  choosing  a  closing  track  for  Watching  It  All  Fall  Apart,  Fruition  landed  on  “Eraser”—a  slow-building,  gently  determined  epic  delivering  a  quiet  message  of  hope  in  its  final  line:  “Let  it  help  you  heal.”“Because  there’s  so  much  heartbreak  on  this  album,  we  wanted  to  end  on  Kellen  singing  that  last  line  very  sweetly,”  explains  Anderson.  “The  whole  point  of  having  all  these  sad  songs  is  helping  people  to  let  those  emotions  out—and  then  hopefully  when  they  get  to  the  end,  they  feel  a  little  better  about  everything  they’ve  gone  through  along  the  way.”</p>',
  'line_up1': '<p><i>"With a nod to the past and a firm foot down on the gas toward the future, the \'Dusters... don\'t leave bluegrass behind; they\'re stretching it from within." - New York Times</i></p><p><i>"The Stringdusters are the Star Wars of Bluegrass and this is their Return of the Jedi. Stop fiddling with your lightsaber and get this album." - Ryan Adams</i></p><p><i>"...these stellar bluegrass players are pushing the music forward." - David Dye/World Café</i></p><p>A band should never stop progressing.</p><p>Forward motion belies creativity and evolution. A staunch and unwavering commitment to progression is how an unassuming group of five friends can collectively become a GRAMMY® Award-winning force of nature. That’s exactly how it happened for The Infamous Stringdusters. Within thirteen years since their 2005 formation, the band—Travis Book [bass, vocals], Andy Falco [guitar, vocals], Jeremy Garrett [fiddle, vocals], Andy Hall [dobro, vocals], and Chris Pandolfi [banjo, vocals]— have consistently forged ahead, relentlessly exploring the musical possibilities of a “bluegrass ensemble” and breaking down boundaries in the process.</p><p>In a genre known for traditionalism, the ‘Dusters have consistently covered new ground, inspired fans, and redefined what a bluegrass band can be. 2018 represented a high watermark for the quintet as they took home a GRAMMY® Award in the category of “Best Bluegrass Album” for their 2017 release Laws of Gravity.</p><p>Even with such milestones, the members feel like they’re only getting started.</p><p>“I’m most inspired by the evolution of the music,” agrees Book. “The band is reaching new heights with our exploration and jamming. The repertoire is deep, and our crew is so entwined in the music and presentation of the show. It’s all come together in the last year or so.”</p><p>Hall adds, “Releasing three recorded projects this year has been artistically exciting. Mostly, the band has taken a huge leap forward in our live show with our improvisation blending from one song into the next. It’s made everything that much more fun.”</p><p>The motion includes a prolific output that rivals any act in music. In 2017 alone, they released three projects: Laws of Gravity, Laws of Gravity: Live, and Undercover Vol. 2 through Lumenhouse Recordings. Impressively, the band’s eighth full length record, Laws of Gravity, received a 2018 GRAMMY® Award nomination in the category of “Best Bluegrass Album”, bowed in the Top 10 of the Billboard Heatseekers Chart, and marked their third debut at #1 on the Bluegrass Albums Chart with Undercover Vol. 2 becoming their seventh Top 10 entry. Recognized by some of the top names in the game, they teamed up with Ryan Adams for performances of “Sweet Carolina” on The Late Show with Stephen Colbert and at Telluride Bluegrass Festival, and Newport Folk Festival. Phil Lesh also tapped them as his band for Phil and Friends at Lockn alongside members of Phish.</p><p>Another tenet of that progression, the second installment of the Undercover series exemplifies the exploration ethos, transforming various recognizable anthems into raw and rootsy gems. “Jessica” by The Allman Brothers Band, rollicks and rolls, “Get Lucky” by Daft Punk maintains its dancefloor energy, and Marvin Gaye’s “What’s Going On,” adopts newfound urgency. The Cure’s “Just Like Heaven” undergoes a bluegrass makeover with galloping banjo and blistering solos.</p><p>Along the way, The Stringdusters have won three International Bluegrass Music Association Awards in 2007 for their debut record, Fork in the Road, in addition to snagging a nomination for “Instrumental Group of the Year” by the International Bluegrass Music Association in 2010. Meanwhile, Things That Fly’s “Magic No. 9” garnered a 2011 GRAMMY® nod in the category of “Best Country Instrumental.” </p><p>The Infamous Stringdusters are grateful for the recognition, but they continue to move forward full speed ahead. </p><p>“I just hope that our music gives people a chance to feel free; free from the burdens of everyday life that we all have, free to just be themselves and be happy,” Falco leaves off.</p><p>“It\'s an amazing gift to play this music, to share this journey with these guys,” concludes Book. “I wouldn\'t trade it for anything, there\'s no other gig I\'d rather have, no other place I’d rather be than in the moment making this music. This band, our organization and crew, we’re a family and I think I speak for everyone when I say I hope we can do this for years to come.”</p>',
  'line_up13': '<p>One of the busiest bands in bluegrass, Joe Mullins & The Radio Ramblers (JMRR) deliver first class entertainment, whether on stage or in the studio. For over a decade, JMRR have consistently delivered chart-topping and crowd-pleasing music, as evidenced by multiple International Bluegrass Music Association (IBMA) awards and Grand Ole Opry appearances on their resume.</p><p>The award-winning band is pleased to announce the release of their sixth album in seven years for bluegrass music’s most historic record label, Rebel Records. The new album, entitled The Story We Tell, brings together a vibrant collection of songs new and old, celebrating the band’s respect for the past while always maintaining a fresh approach.</p><p>The album’s opening track and first single, “Long Gone Out West Blues” takes listeners on a trip on horseback through the wild west. This high-energy song came to JMRR via Canadian folk duo, Pharis & Jason Romero. “The uniquely styled lyrics and the melody made it a natural for us and the challenge of a song with no chorus is something I love,” says Mullins. “It\'s a powerful piece!” An instrumental and vocal powerhouse, the adrenaline is contagious, and proves an ample introduction to the new album from JMRR.</p><p>Featuring Joe Mullins and his banjo, alongside bluegrass veterans Mike Terry (mandolin), Jason Barie (fiddle), Randy Barnes (bass), and Duane Sparks (guitar), The Story We Tell builds on the band’s previous success, but JMRR are not content to rest on their laurels. The Story We Tell features the band’s most inventive and innovative arrangements to date, both vocally and instrumentally. The creativity makes this a Radio Ramblers project like no other.</p><p>Filled with new songs from some of today’s top songwriters, including Larry Cordle, Jerry Salley, Ronnie Bowman, Steve Bonafel, and Raleigh Satterwhite, alongside forgotten gems the band dusted off from such varied sources as The Delmore Brothers, Merle Haggard, and The Browns, the balance achieved on The Story We Tell flows through the speakers like tuning in to your favorite radio broadcast — a claim only befitting of the reigning IBMA Broadcaster of the Year, Joe Mullins.</p>',
  'line_up2': '<p>Keller Williams released his first album in 1994, FREEK, and has since given each of his albums a single syllable title: BUZZ, SPUN, BREATHE, LOOP, LAUGH, HOME, DANCE, STAGE, GRASS, DREAM, TWELVE, LIVE, ODD, THIEF, KIDS, BASS, PICK,  FUNK, VAPE, SYNC and RAW, , those who have followed his career will know this.  Each title serves as a concise summation of the concept guiding each project. GRASS, for example, is a bluegrass recording cut with the husband-wife duo The Keels. STAGE is a live album and DREAM is the realization of Keller’s wish to collaborate with some of his musical heroes. THIEF is a set of unexpected cover songs, KIDS offers Keller’s first children’s record, PICK presents Keller’s collaboration with royal bluegrass family The Travelin’ McCoury’s, and RAW is a solo acoustic album. Each album showcases Keller’s comprehensive and diverse musical endeavors and functions to provide another piece of the jigsaw puzzle that is Keller Williams. Keller’s collaborative and solo albums reflect his pursuit to create music that sounds like nothing else. Unbeholden to conventionalism, he seamlessly crosses genre boundaries. The end-product is astounding and novel music that encompasses rock, jazz, funk, and bluegrass, and always keeps the audience on their feet.</p><p>Since he first appeared on the scene in the early ’90s, Williams has defined the term independent artist. And his recordings tell only half the story. Keller built his reputation initially on his engaging live performances, no two of which are ever alike. For most of his career he has performed solo. His stage shows are rooted around Keller singing his compositions and choice cover songs, while accompanying himself on acoustic guitar. With the use of today’s technology, Keller creates samples on the fly in front of the audience, a technique called live phrase sampling or looping, with nothing pre-recorded, the end result often leans toward a hybrid of alternative folk and groovy electronica. A genre Keller jokingly calls “acoustic dance music” or ADM.”</p><p>That approach, Williams explains, was derived from “hours of playing solo with just a guitar and a microphone, and then wanting to go down different avenues musically. I couldn’t afford humans and didn’t want to step into the cheesy world of automated sequencers where you hit a button and the whole band starts to play, then you’ve got to solo along or sing on top of it. I wanted something more organic yet with a dance groove that I could create myself.”</p><p>Williams’ solo live shows—and his ability to improvise to his determinedly quirky tunes despite the absence of an actual band—quickly became the stuff of legend, and his audience grew exponentially when word spread about this exciting, unpredictable performer. Once he began releasing recordings, starting with 1994’s FREEK, Williams was embraced by an even wider community of music fans, particularly the jam band crowd. While his live gigs have largely been solo affairs, Williams has nearly always used his albums as a forum for collaborations with fellow musicians. An alliance with The String Cheese Incident on 1999’s BREATHE marked Williams’ first release on the band’s label SCI Fidelity Records, DREAM, Keller’s 2007 release, found him in the company of such iconic musicians as the Grateful Dead’s Bob Weir, banjo master Béla Fleck, bass great Victor Wooten, American musician/poet Michael Franti and many others.</p><p>Williams’ story begins in Fredericksburg, Virginia, just south of Washington, D.C. There he was exposed to a wide variety of music at an early age, starting with country and bluegrass and working his way up through hip-hop and go-go, a brand of funk particular to that part of the country. Once he began playing guitar, Williams’ sphere expanded to what he calls “the post-pseudo-skateboarder punk-rock rebellious type of thing, Black Flag and Sex Pistols and Ramones, Dead Kennedys, things like that. That slid into the more melodic college rock, like the Cure and the Cult, the Smiths, R.E.M.’s first five or six records.”</p><p>Then came the Grateful Dead, a seminal influence on Williams’ own music. “I studied and learned their music and went to the shows,” he says, adding that the impact of Jerry Garcia on his attitude toward music remains incalculable. Another major influence was Michael Hedges, the late virtuoso acoustic guitarist. “He was really excelling in a whole different world from what I knew,” says Williams.</p><p>After relocating to Colorado, further exposure to bluegrass music and progressive acoustic artists such as Béla Fleck and the Flecktones also had a major impression on Williams. As he began to develop his own distinctive compositional and performing style, Williams incorporated all of the lessons he’d learned from the long list of artists who’d found their way into his world, then filtered their music through his own experiences until something wholly unique emerged. The list of artists whose music he has covered either in concert or on his recordings constitutes a mind-blowing spread: songs originally performed by everyone from Pink Floyd and Ozzy Osbourne to Ani DiFranco and old-school rappers the Sugar Hill Gang!</p><p>When he first started out, Williams played in regional bands but also performed as a solo artist, “me sitting on a stool playing covers, like a happy hour situation,” he says. “I’d get dinner and maybe tips. There were bands in high school and in college. But it turned out I could get the same money playing solo that I was getting with the band. Around that time I was also doing temporary jobs and I was making the same amount playing music as I was scraping mortar out of the cracks of cinder block walls for eight hours in the summertime at minimum wage. So it seemed like the obvious choice was to play music. I started to work and over the years I incorporated more technology. The looping thing started to happen and tickets were sold and people came to shows, so there wasn’t any reason to fix something that wasn’t broken.”What Williams calls “the looping thing” is actually a big part of what has made him such a compelling live performer. “Basically, I have these machines that are essentially delay units,” he explains. “What I do is step on a button and sing or play something. Then I step on the same button in time and it repeats what I just played or sang. Once that initial loop is created, I can layer on a bass line or a drum line and then have this layer that I just created in front of an audience that I could sing over and solo over. Nothing is pre-recorded. Everything is created onstage in front of the audience.” If it sounds complicated, it is: but the basic thrust is that the technology has allowed Williams to go out on tour week after week, year after year, and play music by himself—without limiting his sound to what we most often associate with the solo singer-songwriter: a guy strumming a guitar and singing. With his arsenal of tech toys, Williams can expand his reach onstage by, in essence, jamming with himself.</p><p>As years have gone by and Keller has continued to evolve he has created more and more unique projects and collaborations with fellow musicians. In 2007 Keller formed a band of his own, Keller Williams with Moseley, Droll and Sipe which featured Keller on rhythm guitar and vocals, Jeff Sipe on drums, Keith Moseley on bass and Gibb Droll on lead guitar. After touring throughout 2007 – 2008, they subsequently released a double live record with a companion DVD, in true Keller Williams fashion, it’s called Live.</p><p>The summer of 2010 found Keller sharing a bus with two of his biggest heroes, former Grateful Dead drummers Bill Kreutzmann and Mickey Hart, as a member of their powerhouse assemblage the Rhythm Devils. “That was a very surreal experience,” Williams says. “We rehearsed for a few days and then we were on a bus with 12 people, two of them being the original drummers from the Grateful Dead.” On that tour, Williams was put in the enviable position of singing many songs from the Grateful Dead catalog for audiences that loved every minute of it.  Inspired by this experience and his admiration for The Grateful Dead, Keller added two Grateful Dead projects to his repertoire: Grateful Grass and Grateful Gospel.  With an ever revolving cast of Jam, Bluegrass, and Gospel musicians, Grateful Grass and Grateful Gospel have become fan favorites and festival staples. Keller’s Grateful Grass tunes can be heard on two live digital releases, REX and DOS.  Keller’s guests on these recordings include: Jeff Austin (Jeff Austin Band), Keith Moseley (String Cheese Incident), Michael Kang (String Cheese Incident), Reed Mathis (Tea Leaf Green), The Keels and many more. Following the Grateful Dead theme, keller also released KEYS, a digital only release on which Keller is at the piano singing a  collection of Dead tunes.  All three of these releases donate proceeds to the Grateful Dead’s Rex Foundation. Williams has also toured as part of a string trio with fellow Virginians, singer/guitarist Larry Keel and his wife, singer/bassist Jenny Keel, dubbed Keller and the Keels.  You can find them hitting key stops on the bluegrass festival circuit playing songs from their two releases GRASS AND THIEF.</p><p>If it seems as if this is a man who never stops, that would be about right. Keller released the amusingly titled THIEF—his all-covers project with the Keels—early in 2010, and KIDS, his sixteenth album, in the fall of that same year. A father of two himself, Williams was, of course, inspired by his own offspring but, he says, some of the songs were written before his children were born. “When Not For Kids Only by Jerry Garcia and David Grisman came out, I knew that there was hope for me with kids music,” he says. “I was really attached to that record.” The songwriting for Kids, Keller says, “was not necessarily singing to the kids. A lot of it was me singing from the perspective of the kids. That was my plan, to get on their wavelength, on their level, and be one of them, so it’s kind of like one of their friends singing to them.”</p><p>Early 2015 found Keller back in the studio working on his 20th release, VAPE.  While mainly a solo endeavor, it does feature a few special guests such as Sampson Grisman, John Kadlecik and a track with the Travelin’ McCourys. In Keller’s own words “Imagine taking these songs and blowing high pressured life through them in a low pressured atmosphere. Out comes highly concentrated music that can be heated up and inhaled through your ears…Vape”.</p><p>In 2016, Keller assembled yet another band, Keller Williams’ KWahtro.  KWahtro, featuring Gibb Droll, Danton Boller and Rodney Holmes,  toured the country throughout the winter and fall of 2016.  The first KWahtro album, SYNC will be released in January of 2017. According to Keller, SYNC began as acoustic dance music but with the help of Droll, Boller and Holmes and special guests Mike Dillon and The Accidentals, the album “morphed into a type of acoustic acid jazz that draws on imagery in both the lyrics and the music.”</p><p>As if one album release wasn’t enough for 2017, Keller’s first all solo acoustic album, RAW, will also be released in January of 2017. Keller started working on RAW in 2011 but got sidetracked by a number of other projects that began to take form. It was when Keller’s 2017 winter tour, Shut the Folk Up and Listen with Leo Kottke, started to take form, that he jumped back into it and completed the album. For Keller this album and tour represent his roots; all solo acoustic guitar and vocals, no looping, pedals or bands.</p>',
  'line_up5': '<p>The Lone Bellow’s third studio album, Walk Into A Storm, was released last fall on Descendant Records/Sony Music Masterworks. The album was produced by Dave Cobb (Chris Stapleton, Sturgill Simpson, Jason Isbell) and recorded in Nashville, TN.</p><p>It’s been three years since the band’s victorious, Then Came The Morning was released. The album was produced by The National’s Aaron Dessner and nominated for an Americana Music Award. The Lone Bellow appeared on Kimmel, Letterman, Conan, CBS This Morning, Later... with Jools Holland and James Corden in support of the album. In the years since the release the band left their beloved adopted home of Brooklyn and moved to Nashville, TN.</p>',
  'line_up12': '<p>A great band is more than the proverbial sum of its parts, and in the pursuit of becoming something that can cut through the clutter of YouTube stars and contest show runner-ups, a great roots music band must become a way of life. Less likely to rely on production or image, they’ve got to connect with their audience only through the craftsmanship of their songs, the energy they channel on the stage and the story that brings them together. Old Salt Union is a string band founded by a horticulturist, cultivated by classically trained musicians, and fueled by a vocalist/bass player who is also a hip-hop producer with a fondness for the Four Freshmen. It is this collision of styles and musical vocabularies that informs their fresh approach to bluegrass and gives them an electric live performance vibe that seems to pull more from Vaudeville than the front porch.</p><p>In 2015 they won the FreshGrass Band contest and found the perfect collaborator in Compass Records co-founder and GRAMMY winning banjoist and composer, Alison Brown, whose attention to detail and high standards pushed the group to develop their influences from beyond a vocabulary to pull from during improvisation and into the foundation of something truly compelling in the roots music landscape.</p><p>Violinist John Brighton mentions some names familiar to the Compass roster as key influences, musicians like Darol Anger, Edgar Meyer, Mike Marshall and Mark O’Connor, all of whom have collaborated with Brown in the past. Primary vocalist and bassist, Jesse Farrar (for the indie rock heads - yes, he’s related – Son Volt front man Jay Farrar is Jesse’s uncle) brings an alternative rock spirit as well as his unique formative experiences as a hip hop producer and bass player for a national tour of The Four Freshmen. The band’s self-titled Compass debut combines these instrumental proclivities with pop melodies and harmonies into a coherent piece of work that carves out a road-less-travelled for the band in the now crowded roots music genre.</p>',
  'line_up14': '<p>The Po\' Ramblin\' Boys started as one of the house bands at Ole Smoky Moonshine Distillery in Gatlinburg, Tennessee. The group\'s high energy and dedication to preserving the traditional sounds of bluegrass music, quickly made them a favorite among tourists from all over the country that visit the Great Smoky Mountains.</p><p>The band backed bluegrass legend James King for the first part of 2015, playing with him at the Society for the Preservation of Bluegrass Music in America awards in February, and for the following 4 months.</p><p>"These are some of the best boys I\'ve ever worked with" - James King</p><p>The group recently signed to Randm Records out of San Diego, California. Their debut album, Back to the Mountains, was released in February 2016.</p>'

};



