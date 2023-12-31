import React from "react";
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD5oSkB_Hklo8pr6SmLuDeJdE2CyJUHeLQQ&usqp=CAU" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
    const {resData}=props;
    return(
            <div className="res-card">
                <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="card-img" />
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(',')}</h4>
                <h4>{resData.info.avgRating}Stars</h4>
                <h4>{resData.info.costForTwo}</h4>
                <h4>{resData.info.sla.slaString}</h4>
            </div>
    )
}

const resList =[
  {
    "info": {
      "id": "21001",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "F.C. Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-f-c-road-shivajinagar-pune-21001",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "42581",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "The Pavillion Mall",
      "areaName": "Shivajinagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "166",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-the-pavillion-mall-shivajinagar-pune-42581",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "394784",
      "name": "Theobroma",
      "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
      "locality": "Shivaji Nagar",
      "areaName": "Shivajinagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "ABOVE ₹179",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/theobroma-shivaji-nagar-shivajinagar-pune-394784",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "288388",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
      "locality": "FC Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "parentId": "195515",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹219"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/starbucks-coffee-fc-road-shivajinagar-pune-288388",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "777087",
      "name": "7th Heaven",
      "cloudinaryImageId": "7884861e69959c4ad9983eeb70726246",
      "locality": "Anand Nagar",
      "areaName": "Sinhgad Road",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Bakery",
        "Cakes and Pastries",
        "Desserts"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "19",
      "avgRatingString": "4.0",
      "totalRatingsString": "2",
      "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 7.4,
        "serviceability": "SERVICEABLE",
        "slaString": "39 mins",
        "lastMileTravelString": "7.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/7th-heaven-anand-nagar-sinhgad-road-pune-777087",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "456986",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "clcpnrfs8dz1xcrlbhwr",
      "locality": "Somwar Peth",
      "areaName": "Rasta Peth",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "2456",
      "avgRatingString": "4.1",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-somwar-peth-rasta-peth-pune-456986",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "243625",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Deccan Gymkhana",
      "areaName": "Deccan Gymkhana",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹179"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "506982",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "Narayan Peth",
      "areaName": "Shaniwar Peth",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-narayan-peth-shaniwar-peth-pune-506982",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "768373",
      "name": "Samudra Veg",
      "cloudinaryImageId": "e18e58b3bbd76ee7e61bd8b41f4c3d3e",
      "locality": "Sarasbaug",
      "areaName": "Swargate",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "176775",
      "avgRatingString": "4.4",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-12c98909-003b-48fe-8622-9641c3500b84"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/samudra-veg-sarasbaug-swargate-pune-768373",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Body=()=>{
    return(
        <div className="body">
        <div className="search-container">
            Search
        </div>
        <div className="res-container">
          {
            resList.map((e)=>(
              <RestaurantCard key={e.info.id} resData={e} />
            ))
          }
        </div>
        </div>
    )
}

const newsList=[{
  "source": {
    "id": null,
    "name": "Biztoc.com"
  },
  "author": "investorplace.com",
  "title": "Cross-Border Champions: 3 Stocks Excelling in International Markets",
  "description": "While isolationism and nationalism appear to be rising themes in global politics, with the investing game, diversity is a core strength, thus boosting the narrative of international stocks. Fundamentally, going abroad for profits may provide risk management. …",
  "url": "https://biztoc.com/x/c4c85ef34dcdecd1",
  "urlToImage": "https://c.biztoc.com/p/c4c85ef34dcdecd1/s.webp",
  "publishedAt": "2023-12-30T06:06:08Z",
  "content": "While isolationism and nationalism appear to be rising themes in global politics, with the investing game, diversity is a core strength, thus boosting the narrative of international stocks. Fundament… [+276 chars]"
},
{
  "source": {
    "id": null,
    "name": "Marketscreener.com"
  },
  "author": null,
  "title": "REUTERS-SCHEDULE/…",
  "description": "(marketscreener.com) \n Here are the top stories and upcoming coverage plans for Reuters\ntext service as of 0600 GMT/ 0100 ET. For a full schedule of\nnews and events, go to our editorial calendar on Reuters Connect\nor on Media Express.\n \n TOP STORIES\n \n GLOBAL…",
  "url": "https://www.marketscreener.com/news/latest/REUTERS-SCHEDULE--45652372/",
  "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
  "publishedAt": "2023-12-30T06:00:12Z",
  "content": "Here are the top stories and upcoming coverage plans for Reuters\r\ntext service as of 0600 GMT/ 0100 ET. For a full schedule of\r\nnews and events, go to our editorial calendar on Reuters Connect\r\nor on… [+4662 chars]"
},
{
  "source": {
    "id": null,
    "name": "Interia.pl"
  },
  "author": "Jan Guss-Gasiński",
  "title": "Pierwsza Tesla Cybertruck miała wypadek. Młody kierowca miał sporo szczęścia",
  "description": "Tesla Cybertruck to jeden z najbardziej wyczekiwanych samochodów tego roku. Na elektrycznego pick-upa klienci czekali latami i wreszcie pierwsze egzemplarze zaczęły trafiać do klientów. Krótko po rynkowym debiucie świat obiegła wiadomość o pierwszym wypadku z…",
  "url": "https://motoryzacja.interia.pl/wiadomosci/wypadki/news-pierwsza-tesla-cybertruck-miala-wypadek-mlody-kierowca-mial-,nId,7238416",
  "urlToImage": "https://i.iplsc.com/-/000IB3UPNPM3H9TE-C461-F4.jpg",
  "publishedAt": "2023-12-30T05:57:50Z",
  "content": "Spis treci:\r\nSie obiegy zdjcia i nagrania z pierwszego wypadku z udziaem Tesli Cybertruck, do którego doszo 28 grudnia w godzinach popoudniowych. Elektryczny pick-up na drodze SR-35 w Kalifornii (Sta… [+2150 chars]"
},
{
  "source": {
    "id": null,
    "name": "CleanTechnica"
  },
  "author": "Jennifer Sensiba",
  "title": "Hertz: Not Enough Teslas Are Getting Rented",
  "description": "A recent video by CNBC takes an in-depth look at a problem Hertz is having: lack of demand for Tesla ... [continued]\nThe post Hertz: Not Enough Teslas Are Getting Rented appeared first on CleanTechnica.",
  "url": "https://cleantechnica.com/2023/12/30/hertz-not-enough-teslas-are-getting-rented/",
  "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/12/Hertz-Rental-Teslas-2000x1000-1.png",
  "publishedAt": "2023-12-30T05:50:09Z",
  "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nA recent video by CNBC takes an in-depth look at a problem Hertz is having: lack of demand for Tesla rentals.… [+7011 chars]"
},
{
  "source": {
    "id": null,
    "name": "Biztoc.com"
  },
  "author": "cnn.com",
  "title": "Elon Musk and these other 9 bosses had a terrible, horrible, no good, very bad 2023",
  "description": "For some top executives, 2023 is a year they would rather forget. Some of their companies lost billions of dollars. Some have lost their jobs. And others badly damaged their reputations and face even more trouble ahead in 2024. CNN Business ended the year cel…",
  "url": "https://biztoc.com/x/f13436461cf2ea6e",
  "urlToImage": "https://c.biztoc.com/p/f13436461cf2ea6e/og.webp",
  "publishedAt": "2023-12-30T05:48:25Z",
  "content": "For some top executives, 2023 is a year they would rather forget.Some of their companies lost billions of dollars. Some have lost their jobs. And others badly damaged their reputations and face even … [+290 chars]"
},
{
  "source": {
    "id": null,
    "name": "Typepad.com"
  },
  "author": "Michel de Guilhermier",
  "title": "Bilan Boursier Tech 2023 !",
  "description": "Sacrée revanche du secteur Tech, le Nasdaq gagnant par exemple 43%, sa meilleure année depuis 20 ans je crois, bien au dessus du Dow Jones (+14%) et du S&P500 (+24%). Pour rappel, en 2022, le Nasdaq avait perdu 33%, le...",
  "url": "https://micheldeguilhermier.typepad.com/mdegblog/2023/12/bilan-boursier-tech-2023-.html",
  "urlToImage": "https://micheldeguilhermier.typepad.com/.a/6a00d8341c5bbe53ef02c8d3a6ad18200b-600wi",
  "publishedAt": "2023-12-30T05:47:50Z",
  "content": "Sacrée revanche du secteur Tech, le Nasdaq gagnant par exemple 43%, sa meilleure année depuis 20 ans je crois, bien au dessus du Dow Jones (+14%) et du S&amp;P500 (+24%). \r\nPour rappel, en 2022, le N… [+833 chars]"
},
{
  "source": {
    "id": "cnn",
    "name": "CNN"
  },
  "author": "Ángela Reyes Haczek",
  "title": "Los trabajadores nórdicos se enfrentaron a Elon Musk en 2023. Esto es lo que podría ocurrir el próximo año",
  "description": "Lo que empezó hace nueve semanas con un grupo de mecánicos suecos que exigían que Tesla aceptara la negociación colectiva se ha convertido en una lucha más amplia por el modo de trabajo y de vida de la región nórdica.",
  "url": "https://cnnespanol.cnn.com/2023/12/30/trabajadores-nordicos-elon-musk-2023-trax/",
  "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2023/11/231124105914-02-elon-musk-sweden.jpg?quality=100&strip=info",
  "publishedAt": "2023-12-30T05:43:33Z",
  "content": "Así es la nueva versión de Optimus, el robot humanoide de Tesla 1:29\r\n(CNN) -- Lo que empezó hace nueve semanas con un grupo de mecánicos suecos que exigían que Tesla aceptara la negociación colectiv… [+9049 chars]"
},
{
  "source": {
    "id": null,
    "name": "FRANCE 24 English"
  },
  "author": "Barbara GABEL",
  "title": "From Musk and Tusk to Swift: Figures who defined 2023",
  "description": "From Iran to Hollywood, in the domains of space travel, football and tech, 2023 was a year shaped by strong personalities. Some inspired us, most made us reflect, and others occasionally annoyed us. As the year comes to an end, FRANCE 24 has selected some of …",
  "url": "https://www.france24.com/en/culture/20231230-from-musk-and-tusk-to-swift-figures-who-defined-2023",
  "urlToImage": "https://s.france24.com/media/display/c74f1cf4-a592-11ee-9fed-005056bfb2b6/w:1280/p:16x9/Personnalit%C3%A9s%202023-couv%20EN.png",
  "publishedAt": "2023-12-30T05:34:12Z",
  "content": "From Iran to Hollywood, in the domains of space travel, football and tech, 2023 was a year shaped by strong personalities. Some inspired us, most made us reflect, and others occasionally annoyed us. … [+11229 chars]"
},
{
  "source": {
    "id": null,
    "name": "FRANCE 24 English"
  },
  "author": "Barbara GABEL",
  "title": "Taylor Swift, Elon Musk, Nargès Mohamadi... les 10 personnalités de 2023",
  "description": "En 2023, l’actualité a été marquée par l’engagement ou le rayonnement de personnalités de tous horizons. Artistes, sportives ou entrepreneurs : France 24 a sélectionné les figures les plus marquantes à travers le monde.",
  "url": "https://www.france24.com/fr/europe/20231230-taylor-swift-elon-musk-narg%C3%A8s-mohamadi-les-10-personnalit%C3%A9s-de-2023",
  "urlToImage": "https://s.france24.com/media/display/f886a580-a3ee-11ee-b6e9-005056a90284/w:1280/p:16x9/02-6.png",
  "publishedAt": "2023-12-30T05:32:44Z",
  "content": "En 2023, lactualité a été marquée par lengagement ou le rayonnement de personnalités de tous horizons. Artistes, sportives ou entrepreneurs : France 24 a sélectionné les figures les plus marquantes à… [+12337 chars]"
}]
const NewsCard=(props)=>{
    const {newsData}=props;
  return(
    <div className="news-card">
      <h2>{newsData.title}</h2>
      <h2>{newsData.publishedAt}</h2>
    </div>
  )
}
const Footer=()=>{
  console.log(newsList)
  return(
    <div className="footer-container">
      {
        newsList.map((e)=>(
          <NewsCard key={e.source.id} newsData={e}/>
        ))
      }
    </div>
  )
}
const AppLayout=()=>{
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)