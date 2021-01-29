export interface DropDownData {
  category: string;
  items: string[];
}
interface base_map {
  [key: string]: DropDownData[];
}

export const to_show_menu_on_index = { 1: true, 2: true, 4: true };

export const drop_down_data: base_map = {
  data: [
    {
      category: "Subscription Management",
      items: [
        "Overview",
        "Create & Manage Plans",
        "Pricing Management",
        "Handle Trial Subscriptions",
        "Customer Self-service Portal",
        "Mobile Solutions",
      ],
    },
    {
      category: "Billing Automation",
      items: [
        "Overview",
        "Usage Based Billing",
        "Invoicing Automation",
        "Quotes",
        "Proration",
      ],
    },
    {
      category: "Recurring Payments",
      items: [
        "Overview",
        "Multiple Payment Methods",
        "Multiple Payment Gateways",
        "Smart Dunning",
        "Chargeback Management",
      ],
    },
    {
      category: "Accounting & Taxes",
      items: [
        "Overview",
        "Revenue Recognition",
        "Manage Sales Tax",
        "One-Click Reconciliation",
        "Reporting & Analytics",
      ],
    },
  ],
};
