# Add Schema to your React application

Help Search Engines with structured data on your pages made with React.
Read more about schema here https://schema.org/

# How to use it

    import JSXSchema from  "jsx-schema";

    export  default  function  App() {
      return (
        <div className="App">
          <h1>Title of Product</h1>
          <JSXSchema
            type="Product title"
            name="Name"
    	    sku={new Date().getTime()}
    	    description="Lorem ipsum..."
    	    offers={{
    		  type: "Offer",
    	      price: 10,
    	      priceCurrency: "USD",
    	      availability: "In stock"
    	    }}
    	    aggregateRating={{
    	      type: "AggregateRating",
    	      ratingValue: "4.8",
    	      reviewCount: "11"
    	    }}
    	  />
        </div>
      );
    }

## Context is using https://schema.org/ by default

If you wanna change it, simply add context as a prop.
Validate schema here: https://validator.schema.org/
