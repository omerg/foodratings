<img align="right" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/bento-box_1f371.png" alt="food" width="120">

# Food Ratings GraphQL API

A public GraphQL API for getting information about food hygiene ratings of restaurants in UK. 

![](https://media.giphy.com/media/jTT2I0ZHuzGlK495pI/source.gif)

The data provide the food hygiene rating or inspection result given to a business and reflect the standards of food hygiene found on the date of inspection or visit by the local authority. Businesses include restaurants, pubs, cafés, takeaways, hotels and other places consumers eat, as well as supermarkets and other food shops.

This project uses [Food Hygiene Rating Scheme API (Version 2)](http://api.ratings.food.gov.uk/help) as a data source, so the schema follows the shape of that data.

## Writing queries

```graphql
query Establishment {
  establishments(localAuthorityId: 195, ratingName: "5", name: "Indian" address: "Darwen") {
    BusinessName
    BusinessType {
      BusinessTypeName
    }
    Rating {
      ratingName,
      
    }
    AddressLine2
    AddressLine4
  }
}
```

The above GraphQL query will produce the following JSON response:

```json
{
  "data": {
    "establishments": [
      {
        "BusinessName": "Akash Indian Takeaway",
        "BusinessType": {
          "BusinessTypeName": "Takeaway/sandwich shop"
        },
        "Rating": {
          "ratingName": "5"
        },
        "AddressLine2": "194 Duckworth Street",
        "AddressLine4": "Darwen"
      },
      {
        "BusinessName": "India 2 U",
        "BusinessType": {
          "BusinessTypeName": "Takeaway/sandwich shop"
        },
        "Rating": {
          "ratingName": "3"
        },
        "AddressLine2": "6 Fore Street",
        "AddressLine4": "Lower Darwen"
      }
    ]
  }
}
```

Check out [the playground](https://foodratings.herokuapp.com/) to explore the schema and test out some queries.

## License

[MIT](./LICENSE)
