import { ProjectType } from "../pages/landing-page/Project";
import uwucrew from "../assets/projects/uwucrew.jpg";
import aiko from "../assets/projects/aiko.jpg";
import waifusion from "../assets/projects/waifusion.jpg";
import billionaires from "../assets/projects/billionaires.jpg";
import cryptoCapsule from "../assets/projects/crypto-capsule.jpg";
import killerGF from "../assets/projects/killer-gf.jpg";
import ami from "../assets/projects/ami.jpg";
import state from "../assets/projects/state.jpg";
import sitesoft from "../assets/projects/sitesoft.jpg";
import slingshot from "../assets/projects/slingshot.jpg";
import orcon from "../assets/projects/orcon.jpg";
import Google_OtherPlatform_integration_Automation from "../assets/projects/Google_OtherPlatform_integration_Automation.jpg";
import AI_Powered_Data_Enrichment_System from "../assets/projects/AI_Powered_Data_Enrichment_System.jpg";
import Gmail_GPT_Automation from "../assets/projects/Gmail_GPT_Automation.jpg";
import Power_Automate from "../assets/projects/Power_Automate.jpg";
import Ecommerce_Car from "../assets/projects/Ecommerce_Car.jpg";
import B2B_Order_Management_System from "../assets/projects/B2B_Order_Management_System.jpg";
import Blog_Post_Make from "../assets/projects/Blog_Post_Make.jpg";
import Hubspot_report from "../assets/projects/Hubspot_report.jpg";
import vehicle_Google_Drvie_Google_sheets from "../assets/projects/vehicle_Google_Drvie_Google_sheets.jpg";
import Zapier_FreshBooks from "../assets/projects/Zapier_FreshBooks.jpg";
import debtFarming from "../assets/projects/debt-farming.jpg";
import akula from "../assets/projects/akula.jpg";
import tlx from "../assets/projects/tlx.jpg";
import infinify from "../assets/projects/infinify.jpg";
import vue_dashboard from "../assets/projects/vue_dashboard.jpg";

export interface TabType {
  label: string;
  projects: ProjectType[];
}

const portfolioTabs: TabType[] = [
  {
    label: "Web ",
    projects: [
      {
        name: "Lotus Dealership - Shopify, React, AWS, Node.js, Express, MongoDB",
        description:
          "Lotus of Vancouver is your local Lotus dealership in Vancouver, BC. Browse new and used Lotus cars online, schedule service, order genuine parts, and more.",
        image: Ecommerce_Car,
        link: "https://www.lotusvancouver.com/",
      },
      {
        name: "Order Management System - B2B, React, Next, HubSpot, Widget",
        description:
          "Offers fulfillment, warehousing, and transportation for DTC and B2B, plus the integrated software you need to provide your end consumers with the best pre-purchase and post-delivery consumer experience.",
        image: B2B_Order_Management_System,
        link: "https://www.stord.com/",
      },
      {
        name: "AI Chat and Imagegeneration",
        description:
          "About Infinify (public ver.) is an AI-powered SaaS application that lets you enjoy various features such as AI chat, image generation, image editing, and more | Next.js, React, Tailwind CSS, Typescript, Clerk, mongodb, shadcn/ui, Stripe",
        image: infinify,
        link: "https://github.com/Maksym-TopDev/AI_Chat_Image_generation",
      },
      {
        name: "Vue Admin Dashboard",
        description:
          "Vue Material Admin Template is a Vue Based Material Design Admin Template. And use Vuetifyjs as base framework. Vuetify is Awesome.",
        image: vue_dashboard,
        link: "https://github.com/Maksym-TopDev/Vue_Material_Admin_Dashboard",
      },
      {
        name: "State Insurance",
        description:
          "State Insurance protects over 400,000 New Zealanders. Recipient of Reader's Digest Trusted Brand Award.",
        image: state,
        link: "https://business.state.co.nz/",
      },
      {
        name: "AMI Insurance",
        description:
          "AMI is one of New Zealand's most trusted insurers, receiving the trusted Brand award for eight years running.",
        image: ami,
        link: "https://business.ami.co.nz/",
      },
      {
        name: "Site Connect",
        description:
          "New Zealand's leading site management & health and safety system for construction and property management.",
        image: sitesoft,
        link: "https://sitesoft.com/",
      },
      {
        name: "Orcon Power",
        description:
          "From broadband to power and mobile plans, Orcon offers a range of services to make your life simpler, easier & faster.",
        image: orcon,
        link: "https://www.orcon.net.nz/power",
      },
      {
        name: "Slingshot Power",
        description:
          "Slingshot is the fourth largest telecommunications company in New Zealand that bundles power into a single plan.",
        image: slingshot,
        link: "https://www.slingshot.co.nz/power",
      },
    ],
  },
  {
    label: "Automation",
    projects: [
      {
        name: "Power Automate & SerpAPI & EAN API & ChatGPT API & Office Script",
        description:
          "- Using Excel Office Script to get product names, GTINs, and brands from Excel Online.\n - Extracting the country of origin(gl code) of a product using the EAN API.\n - Using SerpAPI, obtain the product ID and search the Google Shopping site to get the corresponding product link.\n - AI-Powered Summary - ChatGPT API extract product details from product links.\n - JSON/XML Parsing - Processing structured data for analysis.\n - Store scraped product details back in Excel Online using Office Script.",
        image: Power_Automate,
        link: "https://www.loom.com/share/4e5e3a627e7c4f678fa4c5af50cd0548?sid=064afec8-e813-42c4-9962-c3472f258849",
      },
      {
        name: "Google_OtherPlatform\n_Integration_Automation",
        description:
          "This project is a clone of Zapier, featuring integrations with Google services like Drive, Gmail, and Sheets, allowing for seamless automation across these platforms. It also includes a GitHub comment integration, enabling workflows that automate tasks based on GitHub activity.",
        image: Google_OtherPlatform_integration_Automation,
        link: "https://github.com/Maksym-TopDev/Google_OtherPlatform_integration_Automation",
      },
      {
        name: "Automated Multi-Store Price Tracker with Make.com, Apify & AI Vision",
        description:
          "Developed an automated price comparison system using Make.com that intelligently searches products across major e-commerce stores – even those with complex URL structures or anti-bot measures. The solution leverages Apify for screenshot capture and OpenAI's image recognition to accurately extract prices, delivering structured data to Google Sheets for actionable insights. Ideal for retailers, dropshippers, and procurement teams needing real-time competitor pricing.",
        image: Blog_Post_Make,
        link: "",
      },
      {
        name: "Zapier & FreshBooks & Airtable & QuickBooks Integration",
        description:
          "Automated Invoice Generation – FreshBooks triggers invoice creation in QuickBooks when a new client is added in Airtable. Expense Tracking Sync – Expenses logged in Airtable automatically update in both FreshBooks and QuickBooks. Client Database Management – New clients in FreshBooks are added to Airtable for CRM tracking.",
        image: Zapier_FreshBooks,
        link: "",
      },
      {
        name: "AI-Powered-Data-Enrichment-System",
        description:
          "An intelligent pipeline that automates lead generation and contextual enrichment from raw CSV data. Real-time keyword filtering via SerpAPI, Contextual data tagging using Groq’s LLaMA3-powered LLM CRM-ready CSV outputs with seamless export support",
        image: AI_Powered_Data_Enrichment_System,
        link: "https://github.com/Maksym-TopDev/AI-Powered-Data-Enrichment-System",
      },
      {
        name: "N8N | HubSpot CRM Automation: Last Contacted Report + Contact Sync",
        description:
          "- Pull Company Data from HubSpot – Extract company names, industries, and last activity dates.\n - Fetch Associated Contacts – For each company, retrieve linked contacts (with emails & roles). \n - Filter & Sort by Last Contact Date – Highlight stale leads needing follow-up. \n - Export to Google Sheets/Outlook mail– Auto-send reports to sales teams or save in a shared spreadsheet.",
        image: Hubspot_report,
        link: "",
      },
      {
        name: "N8N | Vehicle Listings with AI Image Analysis & Data Enrichment",
        description:
          "This automation takes in a vehicle submission form with basic text info and up to 20 images. It uses AI to analyze, label, and filter the photos, pulls additional vehicle specs from the web, scrapes a brand logo, and formats everything into clean, structured data. \n Structured Output: \n • A labeled and sorted Google Drive folder containing renamed image files. \n • A fully populated Google Sheet with rows containing specifications, features, vehicle overview, and direct image URLs.\n • All data ready to be pushed to a CMS like Framer or any inventory system.",
        image: vehicle_Google_Drvie_Google_sheets,
        link: "",
      },
      {
        name: "Gmail_GPT_Automation",
        description:
          "FastAPI Web Service API with OpenAI integration. Send Gmail data via Zapier webhook & get customized output using OpenAI API. Fast, efficient, and AI-powered automation. Explore AI-driven possibilities now! #FastAPI #OpenAI #AI-Automation",
        image: Gmail_GPT_Automation,
        link: "https://github.com/Maksym-TopDev/Gmail_GPT_automation",
      },
    ],
  },
  {
    label: "Web3",
    projects: [
      {
        name: "TLX",
        description:
          "TLX provides leveraged tokens for over 50 assets with up to 20x leverage, powered by Synthetix, on the Optimism blockchain.",
        image: tlx,
        link: "https://tlx.fi/",
      },
      {
        name: "Crypto Capsule",
        description:
          "Crypto Capsule is a tool for creating timelock contracts that can be used as a decentralised term deposit or trust fund.",
        image: cryptoCapsule,
        link: "https://blockchain-time-capsule.web.app/",
      },
      {
        name: "Debt Farming",
        description:
          "The best DeFi yields on Ethereum for your favourite crypto assets.",
        image: debtFarming,
        link: "https://debtfarming.com/",
      },
      {
        name: "Akula",
        description:
          "Akula is the fastest Ethereum protocol client implementation. It supports Faster sync speeds, crash resilience and a state API.",
        image: akula,
        link: "https://akula-dac7e.web.app/",
      },
      {
        name: "Killer GF",
        description:
          "An anime art NFT collection on Ethereum, featuring cute girlfriends that are also killer assassins. Art by ex-Riot Games artist Zeronis.",
        image: killerGF,
        link: "https://killergf.com/",
      },
      {
        name: "Aiko Virtual",
        description:
          "A collection of 8,888 NFTs that are all about 'Cyber Cute', an aesthetic that blends future tech with anime.",
        image: aiko,
        link: "https://aikovirtual.com/",
      },
      {
        name: "Bitcoin Billionaires",
        description:
          "A collection of unique pixel art NFTs from the creators of Bitcoin Billionaire, the hit mobile game with over 10 million downloads.",
        image: billionaires,
        link: "https://billionaires.io/",
      },
      {
        name: "Uwucrew",
        description:
          "uwucrew is a generative collection of 9,670 avatar NFTs inspired by anime and pop culture.",
        image: uwucrew,
        link: "https://uwucrew.art/",
      },
      {
        name: "Waifusion",
        description:
          "Waifusion is a set of 16,384 uniquely generated, anime inspired, digital waifu NFT collectibles on Ethereum and Binance Smart Chain.",
        image: waifusion,
        link: "https://waifusion.io/",
      },
    ],
  },
];

export default portfolioTabs;
