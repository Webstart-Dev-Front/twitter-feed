import { render } from '@testing-library/react';
import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import tw from './jamy_tweets.js'

function App() {
  const [tweets, setTweets] = useState(tw.slice(0, 3))

  const addTweet = () => {
    // tweets.push(oneTweet)
    const newTweet = oneTweet;
    // [0 , 0, 0] => [0, 0 , 0, 1]
    const newTweets = [...tweets, newTweet]
    
    setTweets(newTweets)
  }
  
  const removeTweet = () => {
    // if(tweets.length === 1) {
    //   return;
    // }
    // problème de mutabilité
    const newTweets = tweets.slice(0, tweets.length - 1)
    
    setTweets(newTweets)
  }

  // RENDER
  // console.log(tweets)
  return (
    <div className="App">
      {/* 
        HEADER
      */}
      <button onClick={addTweet}>AJOUTER</button>
      <button onClick={removeTweet}>SUPPRIMMER</button>
      {/* USER */}
      {tweets.length > 0 ? <Header tweets={tweets} bonjour='2' /> : null}
      {tweets.map((tweet) => {
        return (
          <div style={{ border: 'red solid 1px' }}>
            <p>{tweet.user.screen_name}</p>
            <p>{tweet.text}</p>
            <div>
              <p style={{ color: 'red', fontSize: 20 }}>
                {tweet.extended_entities ? 'yes' : null}
              </p>
              <img src={tweet?.entities?.urls[0]?.url} style={{ height: 50, width: 50 }} />
              </div>
          </div>
        )
      })}
    </div>
  );
}

const oneTweet = {
  "created_at": "Mon Nov 16 18:34:24 +0000 2020",
  "id": 1328406078372114434,
  "id_str": "1328406078372114434",
  "text": "Très heureux de vous annoncer le lancement d'#Épicurieux ! Il va y en avoir pour tous les goûts 🤓\n\nPour découvrir l… https://t.co/W95EUzaBoN",
  "truncated": true,
  "entities": {
      "hashtags": [
          {
              "text": "Épicurieux",
              "indices": [
                  45,
                  56
              ]
          }
      ],
      "symbols": [],
      "user_mentions": [],
      "urls": [
          {
              "url": "https://t.co/W95EUzaBoN",
              "expanded_url": "https://twitter.com/i/web/status/1328406078372114434",
              "display_url": "twitter.com/i/web/status/1…",
              "indices": [
                  117,
                  140
              ]
          }
      ]
  },
  "source": "<a href=\"https://studio.twitter.com\" rel=\"nofollow\">Twitter Media Studio</a>",
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
      "id": 4127289801,
      "id_str": "4127289801",
      "name": "Jamy Gourmaud",
      "screen_name": "gourmaud_jamy",
      "location": "",
      "description": "Curieux & enthousiaste :\n📺 @LeMondeDeJamy #CestpasSorcier (@france3tv)\n📱 Et maintenant #Epicurieux !\n⬇ Venez développer votre goût du savoir 🤓",
      "url": "https://t.co/YbTPffiv0a",
      "entities": {
          "url": {
              "urls": [
                  {
                      "url": "https://t.co/YbTPffiv0a",
                      "expanded_url": "https://bit.ly/Epicurieux",
                      "display_url": "bit.ly/Epicurieux",
                      "indices": [
                          0,
                          23
                      ]
                  }
              ]
          },
          "description": {
              "urls": []
          }
      },
      "protected": false,
      "followers_count": 316046,
      "friends_count": 97,
      "listed_count": 288,
      "created_at": "Fri Nov 06 14:17:40 +0000 2015",
      "favourites_count": 2406,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": true,
      "verified": true,
      "statuses_count": 1302,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1146835685040676873/fC2aHZO7_normal.jpg",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1146835685040676873/fC2aHZO7_normal.jpg",
      "profile_banner_url": "https://pbs.twimg.com/profile_banners/4127289801/1597664874",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": true,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "is_quote_status": false,
  "retweet_count": 105,
  "favorite_count": 588,
  "favorited": false,
  "retweeted": false,
  "possibly_sensitive": false,
  "lang": "fr"
}

export default App;
