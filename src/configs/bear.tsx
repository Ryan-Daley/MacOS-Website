import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "A little bit about me..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "More about this website..."
      }
    ]
  },
  {
    id: "data-science",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "about-datasci",
        title: "Data Science Projects",
        file: "markdown/about-datasci.md",
        icon: "i-ocitcon:browser",
        excerpt: "================="
      },
      {
        id: "Determinants of House Prices",
        title: "House Prices",
        file: "https://raw.githubusercontent.com/Ryan-Daley/House-Price-Determinants/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "Analysing house prices in R using the popular Boston Housing Dataset...",
        link: "https://github.com/Ryan-Daley/House-Price-Determinants"
      },
      {
        id: "Text Analytics In R",
        title: "Text Analytics In R",
        file: "https://raw.githubusercontent.com/Ryan-Daley/Text-Analytics-With-R/main/README.md",
        icon: "i-octicon:repo",
        excerpt: "Text analytics and sentiment analysis of Ted Talks with R...",
        link: "https://github.com/Ryan-Daley/Text-Analytics-With-R"
      },
      {
        id: "Fair's Affairs",
        title: "Fair's Affairs",
        file: "https://raw.githubusercontent.com/Ryan-Daley/Extramarital-Affairs/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "A statistical analysis of Ray Fair's extramarital affairs dataset...",
        link: "https://github.com/Ryan-Daley/Extramarital-Affairs"
      },
      {
        id: "Good Cop, Bad Cop",
        title: "Good Cop, Bad Cop",
        file: "https://raw.githubusercontent.com/Ryan-Daley/Good-Cop-Bad-Cop/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "A detailed Analysis of the Center for Policing Equity's (CPE) Policing Dataset...",
        link: "https://github.com/Ryan-Daley/Good-Cop-Bad-Cop"
      },
      {
        id: "2peace?",
        title: "Predicting Peace",
        file: "https://raw.githubusercontent.com/Ryan-Daley/To-Peace-Or-Not-To-Peace-/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "Using natural language processing to predict success of peace talks...",
        link: "https://github.com/Ryan-Daley/Good-Cop-Bad-Cop"
      },
      {
        id: "Telco Churn",
        title: "Churn, Baby, Churn",
        file: "https://raw.githubusercontent.com/Ryan-Daley/Churn-Baby-Churn/main/README.md",
        icon: "i-octicon:repo",
        excerpt: "Predicting customer churn for Telecommunication companies..."
      },
      {
        id: "recommender system",
        title: "Recommender Systems",
        file: "https://raw.githubusercontent.com/Ryan-Daley/Recommendation-Systems/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "Collaborative & content-based filtering recommendation systems..."
      },
      {
        id: "MA336",
        title: "Image Deblurring",
        file: "https://rawgithubusercontent.com/Ryan-Daley/ImageDeblurring/main/README.md",
        icon: "i-octicon:repo",
        excerpt:
          "Creating and Training a convolutional neural network to unblur images...",
        link: "https://github.com/Ryan-Daley/ImageDeblurring"
      }
    ]
  },
  {
    id: "Maths & Stats",
    title: "Maths & Stats",
    icon: "i-octicon:repo",
    md: [
      {
        id: "mathntes",
        title: "Maths & Stats Notes",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: "================"
      },
      {
        id: "chpt1",
        title: "1. Exploratory Analysis",
        file: "markdown/math-notes/Section 1.pdf",
        icon: "i-ocitcon:browser",
        excerpt: "An introductory chapter to exploratory data analysis.."
      },
      {
        id: "chpt2",
        title: "2. Data & Sampling Distributions",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
      {
        id: "chpt3",
        title: "3. Experiments & Significance Testing",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
      {
        id: "chpt4",
        title: "4. Regression & Prediction",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
      {
        id: "chpt5",
        title: "5. Classification",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
      {
        id: "chpt6",
        title: "6. Machine Learning",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
      {
        id: "chpt7",
        title: "7. Unsupervised Learning",
        file: "markdown/about-mathnotes.md",
        icon: "i-ocitcon:browser",
        excerpt: ""
      },
    ]
  },
  {
    id: "internationalrelations",
    title: "IR Essays",
    icon: "i-octicon:repo",
    md: [
      {
        id: "IRessays",
        title: "IR Essays",
        file: "markdown/about-iressays.md",
        icon: "i-octicon:repo",
        excerpt: "======="
      },
      {
        id: "BRIlit",
        title: "BRI Literature Review",
        file: "markdown/IRessays/Belt & Road Initiative Literature Review.pdf",
        icon: "i-octicon:repo",
        excerpt: "Excerpt from undergrad dissertation reviewing The Belt & Road Initiative..."
      },
      {
        id: "ChineseAutocracy",
        title: "Chinese Autocracy",
        file: "markdown/IRessays/Autocracy & Democracy - How Does Chinas Authoritarian System Sustain Itself.pdf",
        icon: "i-octicon:repo",
        excerpt: "Looking at how China's autocratic regime sustains itself..."
      },
      {
        id: "21stSecStudies",
        title: "The Nature of Security",
        file: "markdown/IRessays/21st Century Security Challenges - How Has the Nature of Security Changed In the 21st Century.pdf",
        icon: "i-octicon:repo",
        excerpt: "A tour d'horizon of the shifting nature of security in the 21st century...",
      },
      {
        id: "Neoliberalism",
        title: "Neoliberalism",
        file: "markdown/IRessays/Ideology & Politics - How far does neoliberalism constitute a distinct and coherent political ideology.pdf",
        icon: "i-octicon:repo",
        excerpt: "Examining whether Neoliberalism constitutes a coherent ideology..."
      },
      {
        id: "Ideology",
        title: "What is Ideology?",
        file: "markdown/IRessays/Ideology & Politics - What Is Meant By Ideology - FINAL.pdf",
        icon: "i-octicon:repo",
        excerpt: "short definitional essay on ideology..."
      },
      {
        id: "ngos",
        title: "NGO Review Article",
        file: "markdown/IRessays/NGOs & Social Movements - Article Review.pdf",
        icon: "i-octicon:repo",
        excerpt: "A Review Article of 'Humanitarian Action under Fire' by Francis Kofi Abiew"
      },
      {
        id: "ngos-sri",
        title: "NGO Self Regulation",
        file: "markdown/IRessays/NGOs & Social Movements - To What Extent Are NGO Self-Regulation Initiatives Effective.pdf",
        icon: "i-octicon: repo",
        excerpt: "Examining the extent to which NGO self regulation iniatives are effective"
      }
    ]
  }
];

export default bear;
