import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles=[
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Beau Dure",
    "title": "Winter Olympics 2022 day five: Shiffrin out of slalom; snowboard cross final – live! - The Guardian",
    "description": "Live updates: Curling, luge, ice hockey and skeleton are all on the menu at the Beijing Games today. Join Beau Dure for the latest action",
    "url": "https://www.theguardian.com/sport/live/2022/feb/08/winter-olympics-2022-day-five-mikaela-shiffrin-slalom-snowboard-cross-latest-updates",
    "urlToImage": "https://i.guim.co.uk/img/media/b0a20c4bc66af2a559049e3df6858660b933327f/0_316_4782_2870/master/4782.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e877074f1280fc6be1f5c363f1aae021",
    "publishedAt": "2022-02-09T04:23:12Z",
    "content": null
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": null,
    "title": "Beijing Olympics: Live Updates - Associated Press",
    "description": "BEIJING (AP) — The Latest on the Beijing Winter Olympics : ___",
    "url": "https://apnews.com/article/winter-olympics-live-updates-18c9c0416b6a8048c05008c26c55cbb5",
    "urlToImage": "https://storage.googleapis.com/afs-prod/media/4ed44d011b6242dca0bf43da5f5b7aec/3000.jpeg",
    "publishedAt": "2022-02-09T03:33:45Z",
    "content": "BEIJING (AP) The Latest on the Beijing Winter Olympics:\r\n___\r\nNorways Birk Ruud won gold in the Olympics first mens freestyle skiing big air event, re-emerging as a leader in the extreme sport after … [+4069 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WYFF4 Greenville"
    },
    "author": "Sam Brooks",
    "title": "Former Spartanburg American Idol contestant charged with fatal DUI in crash - WYFF4 Greenville",
    "description": "2011 Ford pick-up was traveling north on W Murph Road in Spartanburg when they drove onto a private driveway and struck the building",
    "url": "https://www.wyff4.com/article/man-dies-hit-car-while-inside-spartanburg-residential-building-american-idol/39018015",
    "urlToImage": "https://kubrick.htvapps.com/vidthumb/69d93082-5d24-4168-a4fe-c92ba1bdfae2/69d93082-5d24-4168-a4fe-c92ba1bdfae2_image.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    "publishedAt": "2022-02-09T03:21:00Z",
    "content": "A former Spartanburg American Idol contestant was charged with a DUI in fatal crash after he hit a man inside a residential building, according to Master Trooper Mitchell Ridgeway from the South Caro… [+801 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Canada truckers: Arrests as police warn of 'volatile' protesters - BBC News",
    "description": "Ottawa police have warned of \"determined\" and \"volatile\" protests amid an all-out effort to remove them.",
    "url": "https://www.bbc.com/news/world-us-canada-60267841",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/136BB/production/_123174597_canadapolicegetty.jpg",
    "publishedAt": "2022-02-09T03:17:10Z",
    "content": "By Jessica Murphy &amp; Bernd Debusmann JrOttawa\r\nImage source, Getty Images\r\nImage caption, Justin Trudeau said he would send whatever support was needed to Ottawa, after the city's mayor asked for … [+6449 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SciTechDaily"
    },
    "author": null,
    "title": "Massive Sponge Gardens Discovered on the Peaks of Extinct Underwater Volcanoes in the Arctic Deep Sea - SciTechDaily",
    "description": "Sponges grow in large numbers and to impressive size on the peaks of extinct underwater volcanoes. Massive sponge gardens thrive on top of seamounts in the Central Arctic Ocean, one of the most oligotrophic seas on Earth. They appear to feed on the remnants o…",
    "url": "https://scitechdaily.com/massive-sponge-gardens-discovered-on-the-peaks-of-extinct-underwater-volcanoes-in-the-arctic-deep-sea/",
    "urlToImage": "https://scitechdaily.com/images/Arctic-Seafloor-Sponges-scaled.jpg",
    "publishedAt": "2022-02-09T03:04:20Z",
    "content": "The dense sponge grounds discovered on the northerly Langseth Ridge seamount structure represent an astonishingly rich ecosystem, demonstrating the ability of sponges and associated microorganisms to… [+7250 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "hoopsrumors.com"
    },
    "author": null,
    "title": "Sabonis To Kings, Haliburton To Pacers In Six-Player Trade - hoopsrumors.com",
    "description": "Both teams had been looking to shake up their rosters before the deadline.",
    "url": "https://www.hoopsrumors.com/2022/02/sabonis-to-kings-haliburton-to-pacers-in-six-player-trade.html",
    "urlToImage": "https://cdn.hoopsrumors.com/files/2022/01/Domantas-Sabonis-900x600.jpg",
    "publishedAt": "2022-02-09T03:00:00Z",
    "content": "9:00pm: The trade is now official, the Pacers announced in a press release.\r\n4:36pm: The second-rounder being sent to Sacramento in the deal is actually a 2023 pick that will be convey if it lands an… [+3815 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Scott Tobias",
    "title": "Where to Stream ‘The Power of the Dog’ and More 2022 Oscar Nominees - The New York Times",
    "description": "Most of the top contenders can be watched at home. Here’s a guide to help you get a jump on the field.",
    "url": "https://www.nytimes.com/2022/02/08/movies/stream-oscars-nominated-movies.html",
    "urlToImage": "https://static01.nyt.com/images/2022/02/08/arts/08oscars-stream/08oscars-stream-facebookJumbo.jpg",
    "publishedAt": "2022-02-09T02:41:03Z",
    "content": "Hello. Im Jane Campion. Im the screenwriter and director of The Power of the Dog. This is the scene I call the love scene. Its a scene that happens in the barn at night with Phil, played by Benedict … [+3721 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Kevin Dotson and Steve Almasy, CNN",
    "title": "Los Angeles Dodgers pitcher Trevor Bauer won't face criminal charges following allegations of assault - CNN",
    "description": "Dodgers pitcher Trevor Bauer will not face criminal charges for sexual assault accusations, the Los Angeles County District Attorney's office says in a charge evaluation sheet obtained by CNN.",
    "url": "https://www.cnn.com/2022/02/08/sport/mlb-trevor-bauer-no-charges-spt/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210910150209-01-trevor-bauer-file-super-tease.jpg",
    "publishedAt": "2022-02-09T02:24:00Z",
    "content": "(CNN)Dodgers pitcher Trevor Bauer will not face criminal charges for sexual assault accusations, the Los Angeles County District Attorney's office says in a charge evaluation sheet obtained by CNN. \r… [+3667 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Heat.com"
    },
    "author": "Brett Martel | The Associated Press",
    "title": "Trail Blazers trade veteran CJ McCollum to Pelicans - NBA.com",
    "description": "Portland deals its standout shooting guard to New Orleans for Josh Hart, young prospects and 3 future draft picks.",
    "url": "https://www.nba.com/news/blazers-pelicans-cj-mccollum-trade",
    "urlToImage": "https://cdn.nba.com/manage/2022/02/cj-mccollum-iso-looks.jpg",
    "publishedAt": "2022-02-09T02:03:45Z",
    "content": "CJ McCollum is averaging more than 20 points for the 7th consecutive season.\r\nNEW ORLEANS (AP) The New Orleans Pelicans acquired guard CJ McCollum from the Portland Trail Blazers as part of a seven-p… [+4865 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "U.S. accuses couple of laundering $4.5 bln in bitcoin tied to 2016 hack - Reuters",
    "description": "The U.S. Justice Department said on Tuesday it has unraveled its biggest-ever cryptocurrency theft, seizing a record-shattering $3.6 billion in bitcoin tied to the 2016 hack of digital currency exchange Bitfinex and arresting a husband-and-wife team on money …",
    "url": "https://www.reuters.com/technology/us-arrests-couple-allegedly-laundering-45-bln-crypto-tied-bitfinex-hack-2022-02-08/",
    "urlToImage": "https://www.reuters.com/resizer/-zvq-XMuCbYrmKcUeOaOwoCEtxM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FVEQOZR5FZPPVDW2CTJ5FCJS2I.jpg",
    "publishedAt": "2022-02-09T00:58:00Z",
    "content": "WASHINGTON/NEW YORK, Feb 8 (Reuters) - The U.S. Justice Department said on Tuesday it has unraveled its biggest-ever cryptocurrency theft, seizing a record-shattering $3.6 billion in bitcoin tied to … [+4939 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Reuven Fenton, Maggie Hicks, Bruce Golding",
    "title": "NYC plans to get rid of outdoor dining sheds once the pandemic ends - New York Post ",
    "description": "The head of the Department of Transportation’s Open Restaurants Program told a City Council committee that the makeshift structures won’t be allowed to remain after the pandemic eases.",
    "url": "https://nypost.com/2022/02/08/nyc-plans-to-get-rid-of-outdoor-dining-sheds-after-pandemic/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/outdoor-dining-ending-234-1-e1644366493853.jpg?quality=90&strip=all&w=1024",
    "publishedAt": "2022-02-09T00:37:00Z",
    "content": "Big changes to the Big Apple’s alfresco restaurant scene are on the table — including a plan to get rid of its popular, but controversial, outdoor dining sheds.\r\nThe head of the city Department of Tr… [+5626 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Bernadette Hogan",
    "title": "Kathy Hochul expected to lift business mask mandate, wait on decision for NY schools - New York Post ",
    "description": "Hochul is expected to announce on Wednesday that she’ll lift a mandate requiring businesses without vaccination requirements to compel workers, customers and visitors to wear face coverings. …",
    "url": "https://nypost.com/2022/02/08/kathy-hochul-to-lift-business-mask-mandate-wait-until-after-break-to-decide-on-schools/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/02/newspress-collage-21138963-1644366288525.png?w=1024",
    "publishedAt": "2022-02-09T00:28:00Z",
    "content": "ALBANY Gov. Kathy Hochul wants everyone to give her a break — the mid-winter break — before she decides whether to lift school mask mandates statewide.\r\nBut Hochul is expected to announce on Wednesda… [+3502 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Jonathan Weisman, Annie Karni",
    "title": "McConnell Denounces R.N.C. Censure of Jan. 6 Panel Members - The New York Times",
    "description": "Senator Mitch McConnell joined a chorus of Republicans distancing themselves from the committee’s action, describing the Capitol riot as “a violent insurrection.”",
    "url": "https://www.nytimes.com/2022/02/08/us/politics/republicans-censure-mcconnell.html",
    "urlToImage": "https://static01.nyt.com/images/2022/02/08/us/politics/08dc-repubs-1/08dc-repubs-1-facebookJumbo.jpg",
    "publishedAt": "2022-02-09T00:15:09Z",
    "content": "Ms. McDaniel has rejected that reading of the resolution, and on Tuesday a spokeswoman said: The R.N.C. has repeatedly condemned all acts of political violence and lawlessness, including what occurre… [+1910 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Aria Bendix",
    "title": "Omicron-infected deer raise questions about spillover to humans - Business Insider",
    "description": "The coronavirus seems widespread among white-tailed deer in the US, raising concerns about the spillover of new variants to humans.",
    "url": "https://www.businessinsider.com/omicron-deer-coronavirus-variant-spillover-humans-2022-2",
    "urlToImage": "https://i.insider.com/6202a58ebd504100191932b7?width=1200&format=jpeg",
    "publishedAt": "2022-02-09T00:03:44Z",
    "content": "Vaughn Cooper sees white-tailed deer every day in his neighborhood outside Pittsburgh. \r\nThe species is common in most US states. Pennsylvania alone has around 1.5 million white-tailed deer about 30 … [+5681 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "mlive.com"
    },
    "author": "Gus Burns | fburns@mlive.com",
    "title": "Court hearing for accused Oxford High School shooter’s parents centers on demons, voices, guns, infidelity - MLive.com",
    "description": "Jennifer and James Crumbley are each charged with four counts of involuntary manslaughter in connection to the school shooting.",
    "url": "https://www.mlive.com/public-interest/2022/02/court-hearing-for-accused-oxford-high-school-shooters-parents-centers-on-demons-voices-guns-infidelity.html",
    "urlToImage": "https://www.mlive.com/resizer/n_Azh3JYSZv7P3XqSvw1BgRyEpc=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/LXO2K3GUPRCNPKVNQVGRW3AZXA.JPG",
    "publishedAt": "2022-02-08T23:46:00Z",
    "content": "OAKLAND COUNTY, MI -- Testimony during the first day of the preliminary exam for the parents of accused Oxford High School shooter Ethan R. Crumbley delved into infidelity, possible mental illness, J… [+7144 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Emma Roth",
    "title": "Apple says a ‘small portion’ of iPhones recorded interactions with Siri even if you opted out - The Verge",
    "description": "When iOS 15.4 rolls out, you’ll see a prompt to select whether your iPhone will record Siri interactions and upload them to Apple’s servers. Apple says this is due to an iOS 15 bug that turned on recording for some users who had opted out.",
    "url": "https://www.theverge.com/2022/2/8/22924225/apple-ios-15-bug-recorded-interactions-siri",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/r9UQpwU7k-G2aeq6L8OPdaS9jKc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11477053/acastro_180604_1777_apple_wwdc_0004.jpg",
    "publishedAt": "2022-02-08T23:29:14Z",
    "content": "Apple says its deleting any inadvertently collected recordings \r\nIllustration by Alex Castro / The Verge\r\nApples release of iOS 15.4 beta 2 fixes a bug that may have recorded interactions with Siri o… [+1800 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Life"
    },
    "author": "Cynthia Cook",
    "title": "Kim Kardashian Emerges With North West, 7, After Nasty Feud With Kanye Over TikTok Use - HollywoodLife",
    "description": "Kim Kardashian and daughter North West were spotted out in Los Angeles on Tuesday after Kanye West's Instagram rants made headlines over the weekend.",
    "url": "https://hollywoodlife.com/2022/02/08/kim-kardashian-north-west-kanye-feud-photos/",
    "urlToImage": "https://hollywoodlife.com/wp-content/uploads/2022/02/Kim-Kardashian-Emerges-North-After-Kanye-Feud-ftr1.jpg",
    "publishedAt": "2022-02-08T23:18:35Z",
    "content": "Kim Kardashian and daughter North West were spotted out in Los Angeles on Tuesday after Kanye West’s Instagram rants made headlines over the weekend.\r\nKim Kardashian and daughter North were seen exit… [+2569 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Clare Foran, CNN",
    "title": "House passes stopgap government funding bill to avert shutdown - CNN",
    "description": "The House of Representatives voted Tuesday to pass a short-term government funding bill to avert a shutdown at the end of next week.",
    "url": "https://www.cnn.com/2022/02/08/politics/house-vote-government-funding-bill/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/191113111541-us-capitol-impeachment-hearing-1113-super-tease.jpg",
    "publishedAt": "2022-02-08T22:59:00Z",
    "content": "(CNN)The House of Representatives voted Tuesday to pass a short-term government funding bill to avert a shutdown at the end of next week. \r\nFunding is currently set to expire on February 18, but the … [+2286 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Brit Awards 2022: Ballads over bangers as Adele wins big - BBC News",
    "description": "The singer bagged three of the main awards at the O2 Arena on Tuesday evening.",
    "url": "https://www.bbc.com/news/entertainment-arts-60312788",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AF09/production/_123190844_hi073645787.jpg",
    "publishedAt": "2022-02-08T22:45:44Z",
    "content": "Paul GlynnBBC culture reporter\r\nImage caption, Adele gave her first performance at the Brit Awards since 2016\r\nAdele won three out the four main prizes at the Brit Awards on Tuesday, where she also p… [+5866 chars]"
    },
    {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "Beatrice Peterson",
    "title": "DC-area sniper appeals life sentences given to him as a juvenile - ABC News",
    "description": "",
    "url": "https://abcnews.go.com/Politics/dc-area-sniper-appeals-life-sentences-juvenile/story?id=82751121",
    "urlToImage": "https://s.abcnews.com/images/Politics/sniper-lee-boyd-malvo-appeal--courtroom-01-gty-llr-220208_1644356682316_hpMain_16x9_992.jpg",
    "publishedAt": "2022-02-08T22:36:31Z",
    "content": "The Maryland Court of Appeals heard oral arguments on Tuesday over whether Lee Boyd Malvo, the last living D.C.-area sniper, should be given a revised sentence under new federal and state laws that a… [+4251 chars]"
    }
    ]
  constructor(){
    super();
    console.log(
      "Hello i am a constructor from news component"
      )
      this.state={
         articles:this.articles,
         loading:false
  }
  }
  render() {
    return <div className='container my-4'>
      <h1 className='my-4'>Top-latest news</h1>
       <div className="row">
      {this.state.articles.map((element)=>{
         return  <div className="col-md-4"  key={element.url}>
           <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>

      })}
        
       
         

       </div>
      
    </div>;
  }
}

export default News;
