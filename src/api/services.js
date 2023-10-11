//Add a place
// export const addPlace = async placeData => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/places`, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//         },
//         body: JSON.stringify(placeData),
//     })
//     const data = await response.json()
//     return data
// }

// Get all services
export const getAllService = async () => {
  const response = await fetch(`/cardDetails.json`);
  const data = await response.json();
  return data;
};

// Get filtered places for hosts
// export const getPlaces = async email => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${email}`,
//     {
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('access-token')}`,
//         },
//     }
//     )
//     const data = await response.json()
//     return data
// }

// Get a single service by ID
export const getService = async (id) => {
  const response = await fetch(`/cardDetails.json`);
  const data = await response.json();
  const service = data.find((item) => item.id === id);
  return service;
};

//delete a Place
// export const deletePlace = async (id) => {
//   const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${id}`, {
//     method: "DELETE",
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };

// update Place
// export const updatePlace= async (placeData, id) => {
//     const response = await fetch(`${import.meta.env.VITE_API_URL}/places/${id}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             authorization: `Bearer ${localStorage.getItem('access-token')}`,
//         },
//         body: JSON.stringify(placeData),
//     })
//     const data = await response.json()
//     return data
// }
