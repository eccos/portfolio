import AniListDateUpdaterImg from '../assets/img/projects/AniList Date Updater.png';
import CreditCardCheckImg from '../assets/img/projects/Credit Card Check.png';
import FleschKincaidGradeLevelImg from '../assets/img/projects/Flesch-Kincaid Grade Level.png';
import PpiCalculatorImg from '../assets/img/projects/PPI Calculator.png';
import SimpleNewsAppImg from '../assets/img/projects/Simple News App.jpeg';
import WikipediaBootstrapRebuildImg from '../assets/img/projects/Wikipedia Bootstrap Rebuild.png';

export const PROJECTS = [
  {
    id: 'WikipediaBootstrapRebuildImg',
    title: 'Wikipedia Bootstrap Rebuild',
    img: WikipediaBootstrapRebuildImg,
    descShort: 'Bootstrap Rebuild of the Wikipedia home page layout',
    githubUrl: 'https://github.com/eccos/epicodus-wikipedia-rebuild',
  },
  {
    id: 'AniListDateUpdaterImg',
    title: 'AniList Date Updater',
    img: AniListDateUpdaterImg,
    descShort:
      "anilist.co doesn't count watched animes if start_date isn't set. This corrects invalid dates",
    githubUrl: 'https://github.com/eccos/aniListStartDateUpdater',
  },
  {
    id: 'FleschKincaidGradeLevelImg',
    title: 'Flesch-Kincaid Grade Level',
    img: FleschKincaidGradeLevelImg,
    descShort:
      'Calculates the Flesch-Kincaid Grade Level for given English phrases to determine how difficult they are to understand',
    githubUrl: 'https://github.com/eccos/fleschKinkaid',
  },
  {
    id: 'CreditCardCheckImg',
    title: 'Credit Card Check',
    img: CreditCardCheckImg,
    descShort: 'Validates credit card numbers using the LUHN Formula (Mod 10)',
    githubUrl: 'https://github.com/eccos/ccCheck',
  },
  {
    id: 'PpiCalculatorImg',
    title: 'PPI Calculator',
    img: PpiCalculatorImg,
    descShort: 'Calculates PPI of displays with square pixels',
    githubUrl: 'https://github.com/eccos/dpi-calculator',
  },
  {
    id: 'SimpleNewsAppImg',
    title: 'Simple News App',
    img: SimpleNewsAppImg,
    descShort: `Uses News API's JSON API to fetch news articles by category`,
    githubUrl: 'https://github.com/eccos/nucamp-news-app',
  },
];
