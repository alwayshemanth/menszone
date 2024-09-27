export interface SignupType {
    email : string ;
    password : string
}

export const rating = {
    ratingRange: [
      {
        id: 1,
        label: '1 Star',
        value: '1',
      },
      {
        id: 2,
        label: '2 Star',
        value: '2',
      },
      {
        id: 3,
        label: '3 Star',
        value: '3',
      },
      {
        id: 4,
        label: '4 Star',
        value: '4',
      },
      {
        id: 5,
        label: '5 Star',
        value: '5',
      },
    ],
  };

  export const price = {
    priceRange: [
      {
        id: 1,
        label: 'under 300',
        value: '0-300',
      },
      {
        id: 2,
        label: 'under 800',
        value: '0-800',
      },
      {
        id: 3,
        label: 'under 1500',
        value: '0-1500',
      },
      {
        id: 4,
        label: 'under 2000',
        value: '0-2000',
      },
      {
        id: 5,
        label: '2000 and above',
        value: '2000-10000',
      },
    ],
  };

  export const category = {
    categories: [
      {
        id: 1,
        label: 'Clothing',
        value: 'clothing',
      },
      {
        id: 2,
        label: 'Grooming',
        value: 'grooming',
      },
      {
        id: 3,
        label: 'Accessories',
        value: 'accessories',
      },
    ],
  };