// Define the data structure
const serviceProviders = [
    { name: "Doggo Kennel", service: "Grooming",  },
    { name: "Doggo Kennel", service: "Dentalcare", },
    { name: "Doggo Kennel", service: "Cardiology",  },
    { name: "Doggo Kennel", service: "Ecograpy",  },
    { name: "Doggo Kennel", service: "vaccination",  },
    { name: "Doggo Kennel", service: "sterilization",  }



  ];
  
  // Display the data
  console.log("Service providers:");
  serviceProviders.forEach(provider => {
    console.log(`${provider.name} - ${provider.service} );
  });
  
  