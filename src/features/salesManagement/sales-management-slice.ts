import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query"


interface SalesManagement {
    id: number
    userId: string
    brand: string
    model: string
    year: number
    quantity: number
    color: string
    sold: number
    createdDate: Date | null
}

const initialState: SalesManagement = {
   id: 0,
   userId: '',
   brand: '', 
   model: '',
   year: 0,
   quantity: 0, 
   color: '',
   sold: 0,
   createdDate: null 
  };


export const salesManagementApi = createApi({
    reducerPath: "sendSalesData",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3010/api/v1/sales-management",
    }),
    endpoints: (builder) => ({
      postUserInformation: builder.query({
        query: (body: SalesManagement) => ({
          url: "/add_sale",
          method: "POST",
          body: body,
        }),
      }),
    }),
  });

  // const salesManagementSlice = createSlice({ 
  //   name: "salesManagement",
  //   initialState,
  //   reducers: {
  //       setInitialState(state: SalesManagement){
  //           state = initialState
  //       }
  //   }
  // })


