export const electricityData = {
  household: {
    daily: 15,
    weekly: 100,
    monthly: 420,
    breakdown: [{
      name: 'Kitchen',
      value: 40
    }, {
      name: 'Living Room',
      value: 25
    }, {
      name: 'Bedroom',
      value: 20
    }, {
      name: 'Bathroom',
      value: 10
    }, {
      name: 'Other',
      value: 5
    }],
    history: [{
      date: '2026-05-01',
      value: 14
    }, {
      date: '2026-05-02',
      value: 16
    }, {
      date: '2026-05-03',
      value: 15
    }, {
      date: '2026-05-04',
      value: 17
    }, {
      date: '2026-05-05',
      value: 14
    }, {
      date: '2026-05-06',
      value: 12
    }, {
      date: '2026-05-07',
      value: 13
    }]
  },
  workplace: {
    daily: 120,
    weekly: 840,
    monthly: 3600,
    breakdown: [{
      name: 'Office Space',
      value: 50
    }, {
      name: 'Conference Rooms',
      value: 15
    }, {
      name: 'Kitchen',
      value: 10
    }, {
      name: 'Server Room',
      value: 20
    }, {
      name: 'Other',
      value: 5
    }],
    history: [{
      date: '2026-05-01',
      value: 115
    }, {
      date: '2026-05-02',
      value: 125
    }, {
      date: '2026-05-03',
      value: 130
    }, {
      date: '2026-05-04',
      value: 120
    }, {
      date: '2026-05-05',
      value: 115
    }, {
      date: '2026-05-06',
      value: 90
    }, {
      date: '2026-05-07',
      value: 85
    }]
  }
};
export const waterData = {
  household: {
    daily: 500,
    weekly: 3500,
    monthly: 15000,
    breakdown: [{
      name: 'Bathroom',
      value: 50
    }, {
      name: 'Kitchen',
      value: 30
    }, {
      name: 'Laundry',
      value: 15
    }, {
      name: 'Other',
      value: 5
    }],
    history: [{
      date: '2026-05-01',
      value: 480
    }, {
      date: '2026-05-02',
      value: 520
    }, {
      date: '2026-05-03',
      value: 490
    }, {
      date: '2026-05-04',
      value: 510
    }, {
      date: '2026-05-05',
      value: 500
    }, {
      date: '2026-05-06',
      value: 470
    }, {
      date: '2026-05-07',
      value: 530
    }]
  },
  workplace: {
    daily: 2000,
    weekly: 14000,
    monthly: 60000,
    breakdown: [{
      name: 'Bathrooms',
      value: 40
    }, {
      name: 'Kitchen',
      value: 20
    }, {
      name: 'Landscaping',
      value: 30
    }, {
      name: 'Other',
      value: 10
    }],
    history: [{
      date: '2026-05-01',
      value: 1900
    }, {
      date: '2026-05-02',
      value: 2100
    }, {
      date: '2026-05-03',
      value: 2000
    }, {
      date: '2026-05-04',
      value: 2050
    }, {
      date: '2026-05-05',
      value: 1950
    }, {
      date: '2026-05-06',
      value: 1800
    }, {
      date: '2026-05-07',
      value: 1700
    }]
  }
};
export const gasData = {
  household: {
    daily: 2,
    weekly: 14,
    monthly: 60,
    breakdown: [{
      name: 'Heating',
      value: 60
    }, {
      name: 'Hot Water',
      value: 25
    }, {
      name: 'Cooking',
      value: 15
    }],
    history: [{
      date: '2026-05-01',
      value: 1.8
    }, {
      date: '2026-05-02',
      value: 2.1
    }, {
      date: '2026-05-03',
      value: 2.0
    }, {
      date: '2026-05-04',
      value: 2.2
    }, {
      date: '2026-05-05',
      value: 1.9
    }, {
      date: '2026-05-06',
      value: 1.7
    }, {
      date: '2026-05-07',
      value: 2.3
    }]
  },
  workplace: {
    daily: 10,
    weekly: 70,
    monthly: 300,
    breakdown: [{
      name: 'Heating',
      value: 70
    }, {
      name: 'Hot Water',
      value: 20
    }, {
      name: 'Kitchen',
      value: 10
    }],
    history: [{
      date: '2026-05-01',
      value: 9.5
    }, {
      date: '2026-05-02',
      value: 10.2
    }, {
      date: '2026-05-03',
      value: 10.0
    }, {
      date: '2026-05-04',
      value: 10.5
    }, {
      date: '2026-05-05',
      value: 9.8
    }, {
      date: '2026-05-06',
      value: 8.5
    }, {
      date: '2026-05-07',
      value: 8.0
    }]
  }
};
export const wasteData = {
  household: {
    daily: 5,
    weekly: 35,
    monthly: 150,
    breakdown: [{
      name: 'Food Waste',
      value: 40
    }, {
      name: 'Packaging',
      value: 30
    }, {
      name: 'Paper',
      value: 20
    }, {
      name: 'Other',
      value: 10
    }],
    history: [{
      date: '2026-05-01',
      value: 4.8
    }, {
      date: '2026-05-02',
      value: 5.2
    }, {
      date: '2026-05-03',
      value: 4.9
    }, {
      date: '2026-05-04',
      value: 5.1
    }, {
      date: '2026-05-05',
      value: 5.0
    }, {
      date: '2026-05-06',
      value: 4.7
    }, {
      date: '2026-05-07',
      value: 5.3
    }]
  },
  workplace: {
    daily: 20,
    weekly: 140,
    monthly: 600,
    breakdown: [{
      name: 'Paper',
      value: 45
    }, {
      name: 'Packaging',
      value: 25
    }, {
      name: 'Food Waste',
      value: 20
    }, {
      name: 'Other',
      value: 10
    }],
    history: [{
      date: '2026-05-01',
      value: 19
    }, {
      date: '2026-05-02',
      value: 21
    }, {
      date: '2026-05-03',
      value: 20
    }, {
      date: '2026-05-04',
      value: 20.5
    }, {
      date: '2026-05-05',
      value: 19.5
    }, {
      date: '2026-05-06',
      value: 18
    }, {
      date: '2026-05-07',
      value: 17
    }]
  }
};
export const suggestions = {
  household: [{
    id: 1,
    title: 'Unplug idle devices',
    description: 'Devices in standby mode still consume electricity. Unplug chargers, TVs, and other electronics when not in use.',
    savings: '5 kWh/week',
    costSavings: '$0.60/week',
    category: 'electricity'
  }, {
    id: 2,
    title: 'Fix leaky faucet',
    description: 'The bathroom sink has an intermittent drip that could waste up to 3,000 gallons per year.',
    savings: '100 L/week',
    costSavings: '$0.25/week',
    category: 'water'
  }, {
    id: 3,
    title: 'Lower thermostat by 1°C',
    description: 'Reducing your heating temperature by just 1°C can save up to 10% on your energy bill.',
    savings: '1 therms/week',
    costSavings: '$1.80/week',
    category: 'gas'
  }, {
    id: 4,
    title: 'Start composting food waste',
    description: 'Food waste accounts for approximately 40% of your household waste. Composting can significantly reduce this.',
    savings: '2 kg/week',
    costSavings: 'Reduced waste fees',
    category: 'waste'
  }],
  workplace: [{
    id: 1,
    title: 'Install motion sensor lighting',
    description: 'Conference rooms and restrooms are often empty with lights left on. Motion sensors can reduce electricity usage by 30% in these areas.',
    savings: '50 kWh/week',
    costSavings: '$6.00/week',
    category: 'electricity'
  }, {
    id: 2,
    title: 'Upgrade to low-flow fixtures',
    description: 'Replace standard faucets with low-flow alternatives to reduce water consumption in restrooms.',
    savings: '500 L/week',
    costSavings: '$1.25/week',
    category: 'water'
  }, {
    id: 3,
    title: 'Optimize HVAC schedule',
    description: 'Your heating system runs at full capacity on weekends when the office is empty. Adjusting the schedule could save significant energy.',
    savings: '8 therms/week',
    costSavings: '$9.60/week',
    category: 'gas'
  }, {
    id: 4,
    title: 'Implement paper recycling program',
    description: 'Office paper accounts for 45% of your waste. A dedicated recycling program can divert this from landfills.',
    savings: '9 kg/week',
    costSavings: 'Reduced waste fees',
    category: 'waste'
  }]
};
export const forecasts = {
  household: {
    electricity: [{
      date: '2026-04-24',
      value: 14,
      type: 'actual'
    }, {
      date: '2026-04-25',
      value: 15,
      type: 'actual'
    }, {
      date: '2026-04-26',
      value: 14.5,
      type: 'actual'
    }, {
      date: '2026-04-27',
      value: 15.2,
      type: 'actual'
    }, {
      date: '2026-04-28',
      value: 14.8,
      type: 'actual'
    }, {
      date: '2026-04-29',
      value: 13,
      type: 'actual'
    }, {
      date: '2026-04-30',
      value: 12.5,
      type: 'actual'
    }, {
      date: '2026-05-01',
      value: 14,
      type: 'actual'
    }, {
      date: '2026-05-02',
      value: 16,
      type: 'actual'
    }, {
      date: '2026-05-03',
      value: 15,
      type: 'actual'
    }, {
      date: '2026-05-04',
      value: 17,
      type: 'actual'
    }, {
      date: '2026-05-05',
      value: 14,
      type: 'actual'
    }, {
      date: '2026-05-06',
      value: 12,
      type: 'actual'
    }, {
      date: '2026-05-07',
      value: 13,
      type: 'actual'
    }, {
      date: '2026-05-08',
      value: 14.5,
      type: 'forecast'
    }, {
      date: '2026-05-09',
      value: 15.2,
      type: 'forecast'
    }, {
      date: '2026-05-10',
      value: 15.8,
      type: 'forecast'
    }, {
      date: '2026-05-11',
      value: 16.1,
      type: 'forecast'
    }, {
      date: '2026-05-12',
      value: 15.5,
      type: 'forecast'
    }, {
      date: '2026-05-13',
      value: 13.2,
      type: 'forecast'
    }, {
      date: '2026-05-14',
      value: 13.8,
      type: 'forecast'
    }],
    predictedCost: 15.40
  },
  workplace: {
    electricity: [{
      date: '2026-04-24',
      value: 110,
      type: 'actual'
    }, {
      date: '2026-04-25',
      value: 115,
      type: 'actual'
    }, {
      date: '2026-04-26',
      value: 118,
      type: 'actual'
    }, {
      date: '2026-04-27',
      value: 120,
      type: 'actual'
    }, {
      date: '2026-04-28',
      value: 117,
      type: 'actual'
    }, {
      date: '2026-04-29',
      value: 95,
      type: 'actual'
    }, {
      date: '2026-04-30',
      value: 90,
      type: 'actual'
    }, {
      date: '2026-05-01',
      value: 115,
      type: 'actual'
    }, {
      date: '2026-05-02',
      value: 125,
      type: 'actual'
    }, {
      date: '2026-05-03',
      value: 130,
      type: 'actual'
    }, {
      date: '2026-05-04',
      value: 120,
      type: 'actual'
    }, {
      date: '2026-05-05',
      value: 115,
      type: 'actual'
    }, {
      date: '2026-05-06',
      value: 90,
      type: 'actual'
    }, {
      date: '2026-05-07',
      value: 85,
      type: 'actual'
    }, {
      date: '2026-05-08',
      value: 120,
      type: 'forecast'
    }, {
      date: '2026-05-09',
      value: 125,
      type: 'forecast'
    }, {
      date: '2026-05-10',
      value: 130,
      type: 'forecast'
    }, {
      date: '2026-05-11',
      value: 127,
      type: 'forecast'
    }, {
      date: '2026-05-12',
      value: 120,
      type: 'forecast'
    }, {
      date: '2026-05-13',
      value: 95,
      type: 'forecast'
    }, {
      date: '2026-05-14',
      value: 90,
      type: 'forecast'
    }],
    predictedCost: 102.50
  }
};
export const benchmarks = {
  household: {
    electricity: {
      user: 100,
      average: 120,
      efficient: 80
    },
    water: {
      user: 3500,
      average: 4000,
      efficient: 3000
    },
    gas: {
      user: 14,
      average: 16,
      efficient: 12
    },
    waste: {
      user: 35,
      average: 40,
      efficient: 25
    }
  },
  workplace: {
    electricity: {
      user: 840,
      average: 900,
      efficient: 750
    },
    water: {
      user: 14000,
      average: 15000,
      efficient: 12000
    },
    gas: {
      user: 70,
      average: 75,
      efficient: 60
    },
    waste: {
      user: 140,
      average: 160,
      efficient: 120
    }
  }
};
export const goals = {
  household: [{
    id: 1,
    title: 'Reduce electricity by 10%',
    target: 10,
    current: 6,
    unit: '%',
    startDate: '2023-05-01',
    endDate: '2023-05-10',
    category: 'electricity'
  }, {
    id: 2,
    title: 'Reduce water usage by 500L',
    target: 500,
    current: 350,
    unit: 'L',
    startDate: '2023-05-01',
    endDate: '2023-05-15',
    category: 'water'
  }, {
    id: 3,
    title: 'Reduce gas consumption by 5%',
    target: 5,
    current: 2,
    unit: '%',
    startDate: '2023-05-01',
    endDate: '2023-05-31',
    category: 'gas'
  }],
  workplace: [{
    id: 1,
    title: 'Reduce office electricity by 15%',
    target: 15,
    current: 8,
    unit: '%',
    startDate: '2023-05-01',
    endDate: '2023-05-31',
    category: 'electricity'
  }, {
    id: 2,
    title: 'Reduce water usage by 2000L',
    target: 2000,
    current: 1200,
    unit: 'L',
    startDate: '2023-05-01',
    endDate: '2023-05-20',
    category: 'water'
  }, {
    id: 3,
    title: 'Implement waste recycling program',
    target: 100,
    current: 60,
    unit: '%',
    startDate: '2023-05-01',
    endDate: '2023-05-15',
    category: 'waste'
  }]
};
export const devices = {
  household: [{
    id: 1,
    name: 'Smart Meter',
    location: 'Utility Room',
    status: 'Online',
    consumption: '10 kWh',
    type: 'electricity'
  }, {
    id: 2,
    name: 'Smart Thermostat',
    location: 'Living Room',
    status: 'Online',
    consumption: '1 therm',
    type: 'gas'
  }, {
    id: 3,
    name: 'Water Flow Monitor',
    location: 'Basement',
    status: 'Online',
    consumption: '100 L',
    type: 'water'
  }, {
    id: 4,
    name: 'Smart Plug - TV',
    location: 'Living Room',
    status: 'Online',
    consumption: '2 kWh',
    type: 'electricity'
  }],
  workplace: [{
    id: 1,
    name: 'Main Electricity Meter',
    location: 'Utility Room',
    status: 'Online',
    consumption: '85 kWh',
    type: 'electricity'
  }, {
    id: 2,
    name: 'HVAC Controller',
    location: 'Server Room',
    status: 'Online',
    consumption: '8 therms',
    type: 'gas'
  }, {
    id: 3,
    name: 'Water Management System',
    location: 'Maintenance Room',
    status: 'Online',
    consumption: '1500 L',
    type: 'water'
  }, {
    id: 4,
    name: 'Smart Lighting Controller',
    location: 'Office Floor',
    status: 'Online',
    consumption: '30 kWh',
    type: 'electricity'
  }, {
    id: 5,
    name: 'Waste Compactor',
    location: 'Loading Dock',
    status: 'Online',
    consumption: '5 kWh',
    type: 'waste'
  }]
};
export const notifications = {
  household: [{
    id: 1,
    title: 'Unusual electricity spike detected',
    message: 'Unusual spike in kitchen electricity at 2:00 PM. This is 40% higher than your typical usage.',
    timestamp: '2026-05-07T14:30:00',
    read: false,
    category: 'electricity'
  }, {
    id: 2,
    title: 'Water leak possible',
    message: 'Continuous water flow detected for over 3 hours. Please check for leaks.',
    timestamp: '2026-05-06T18:45:00',
    read: true,
    category: 'water'
  }, {
    id: 3,
    title: 'Goal achievement',
    message: "Congratulations! You've reached 50% of your electricity reduction goal.",
    timestamp: '2026-05-05T09:15:00',
    read: false,
    category: 'goal'
  }, {
    id: 4,
    title: 'New suggestion available',
    message: "We've analyzed your usage and found a new way to save on heating costs.",
    timestamp: '2026-05-03T11:20:00',
    read: true,
    category: 'suggestion'
  }],
  workplace: [{
    id: 1,
    title: 'Server room temperature alert',
    message: 'Server room temperature has increased by 5°C, resulting in higher electricity usage for cooling.',
    timestamp: '2026-05-07T10:30:00',
    read: false,
    category: 'electricity'
  }, {
    id: 2,
    title: 'Weekend water usage',
    message: 'Significant water usage detected during weekend hours when the facility is closed.',
    timestamp: '2026-05-06T08:15:00',
    read: true,
    category: 'water'
  }, {
    id: 3,
    title: 'Monthly report available',
    message: 'Your April 2023 sustainability report is now available for download.',
    timestamp: '2026-05-05T13:45:00',
    read: false,
    category: 'report'
  }, {
    id: 4,
    title: 'Waste reduction milestone',
    message: 'Office waste reduced by 15% this month compared to last month. Great progress!',
    timestamp: '2026-05-03T16:20:00',
    read: true,
    category: 'waste'
  }, {
    id: 5,
    title: 'Maintenance reminder',
    message: 'HVAC system is due for maintenance to ensure optimal energy efficiency.',
    timestamp: '2026-05-02T09:10:00',
    read: false,
    category: 'maintenance'
  }]
};
export const floorPlan = {
  household: {
    layout: [{
      id: 'livingRoom',
      name: 'Living Room',
      x: 10,
      y: 10,
      width: 200,
      height: 150,
      consumption: {
        electricity: 25,
        water: 5,
        gas: 20,
        waste: 15
      }
    }, {
      id: 'kitchen',
      name: 'Kitchen',
      x: 220,
      y: 10,
      width: 150,
      height: 150,
      consumption: {
        electricity: 40,
        water: 30,
        gas: 60,
        waste: 40
      }
    }, {
      id: 'bedroom',
      name: 'Bedroom',
      x: 10,
      y: 170,
      width: 180,
      height: 130,
      consumption: {
        electricity: 20,
        water: 5,
        gas: 15,
        waste: 10
      }
    }, {
      id: 'bathroom',
      name: 'Bathroom',
      x: 200,
      y: 170,
      width: 100,
      height: 130,
      consumption: {
        electricity: 10,
        water: 50,
        gas: 5,
        waste: 20
      }
    }, {
      id: 'laundry',
      name: 'Laundry',
      x: 310,
      y: 170,
      width: 60,
      height: 130,
      consumption: {
        electricity: 5,
        water: 10,
        gas: 0,
        waste: 15
      }
    }]
  },
  workplace: {
    layout: [{
      id: 'office',
      name: 'Office Space',
      x: 10,
      y: 10,
      width: 300,
      height: 200,
      consumption: {
        electricity: 50,
        water: 20,
        gas: 30,
        waste: 45
      }
    }, {
      id: 'conference',
      name: 'Conference Rooms',
      x: 320,
      y: 10,
      width: 150,
      height: 100,
      consumption: {
        electricity: 15,
        water: 5,
        gas: 10,
        waste: 10
      }
    }, {
      id: 'kitchen',
      name: 'Kitchen',
      x: 320,
      y: 120,
      width: 150,
      height: 90,
      consumption: {
        electricity: 10,
        water: 20,
        gas: 10,
        waste: 20
      }
    }, {
      id: 'serverRoom',
      name: 'Server Room',
      x: 10,
      y: 220,
      width: 100,
      height: 80,
      consumption: {
        electricity: 20,
        water: 0,
        gas: 0,
        waste: 5
      }
    }, {
      id: 'restrooms',
      name: 'Restrooms',
      x: 120,
      y: 220,
      width: 100,
      height: 80,
      consumption: {
        electricity: 5,
        water: 40,
        gas: 5,
        waste: 15
      }
    }, {
      id: 'storage',
      name: 'Storage',
      x: 230,
      y: 220,
      width: 240,
      height: 80,
      consumption: {
        electricity: 0,
        water: 15,
        gas: 45,
        waste: 5
      }
    }]
  }
};