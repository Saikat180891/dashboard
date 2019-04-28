import { Content } from "./module/shared/accordion/content.model";

export const LINKS: Content[] = [
  {
    heading: "Stats",
    subHeading: [
      {
        label: "Dashboard",
        route: "dashboard"
      }
    ]
  },
  {
    heading: "Customers",
    subHeading: [
      {
        label: "New Customers",
        route: "newcoustomer"
      },
      {
        label: "Existing Customer",
        route: "existingcustomer"
      }
    ]
  },
  {
    heading: "Orders",
    subHeading: [
      {
        label: "Pending",
        route: "pending"
      },
      {
        label: "Delivered",
        route: "delivered"
      },
      {
        label: "In Progress",
        route: "inprocess"
      }
    ]
  },
  {
    heading: "Sales",
    subHeading: [
      {
        label: "Sales",
        route: "sales"
      }
    ]
  },
  {
    heading: "Inventory",
    subHeading: []
  }
];
