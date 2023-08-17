const input = [
    { brand: "BMW", model: "320 i", kw: 120 },
    { brand: "Mercedes", model: "C 200", kw: 134 },
    { brand: "Renault", model: "Laguna", kw: 97 },
    { brand: "Toyota", model: "Yaris", kw: 52 },
    { brand: "Ford", model: "Kuga", kw: 85 },
    { brand: "Volvo", model: "V60", kw: 111 },
    { brand: "Audi", model: "A3", kw: 123 },
    { brand: "VW", model: "Golf", kw: 106 },
  ];
  
  // 1.
  input.sort((a, b) => a.kw - b.kw);
  
  // 2.
  const fastCars = input.filter(car => car.kw > 100).map(car => `${car.brand} ${car.model}`);
  
  // 3.
  console.log(fastCars);
  