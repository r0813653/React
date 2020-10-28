import categories from './categories';
import {v4 as uuidv4} from 'uuid';

export default class DataAPI {

    /**
     * De categories variabele heeft volgend formaat:
     * [
     *  {
     *      inQuickInfo: boolean,                     Niet van toepassing in de oefening.
     *      name: string,                             De naam van de categorie.
     *      id: string,                               Het ID van de categorie.
     *      options: [                                Lijst van opties binnen deze categorie.
     *          {
     *              name: string,                     De naam van de optie.
     *              id: string,                       Het ID van de optie.
     *              checked: boolean,                 Is deze optie gekozen door de gebruiker.
     *              recommended: false                Is deze optie aanbevolen door de webshop.
     *          }
     *      ]
     *  }
     * ]
     */
    categories;

    /**
     * De computers variabele heeft volgend formaat:
     * [
     *  {
     *      name: string,                             De naam van de computer.
     *      price: number,                            De prijs van de computer (een geheel getal).
     *      info: string,                             Korte tekst die info geeft over de schermdiagonaal, CPU en het RAM
     *      id: string,                               Het ID van de computer.
     *      options: [                                De specificaties van de computer.
     *          {
     *              $categoryId: string               Key-value paren die een categoryId linken aan de gekozen optie.
     *          }
     *      ]
     *  }
     * ]
     */
    computers;

    constructor() {
        if (localStorage.categories) {
            this.categories = JSON.parse(localStorage.categories);
        } else {
            this.categories = categories;
            localStorage.categories = JSON.stringify(categories);
        }

        if (localStorage.computers !== undefined) {
            this.computers = JSON.parse(localStorage.computers);
        } else {
            this.computers = this.generateComputers(150);
            localStorage.computers = JSON.stringify(this.computers);
        }

    }

    /**
     * Gebruik de geselecteerde filters om te bepalen welke computer wel of niet getoond moet worden.
     *
     * Deze methode is ZEER traag. In een productieomgeving is dit absoluut geen goed idee.
     * Vele optimalisaties mogelijk, maar omdat het doel hier React is wordt voor eenvoud gekozen boven performatie.
     * @returns {*}
     */
    getFilteredComputers = () => {
        let filtered = this.computers;

        for (const category of this.categories) {
            filtered = filtered.filter(c => this.computerMatchesCategoryFilter(c, category.id));
        }
        return filtered;
    }

    /**
     * Filter één computer op basis van de selecties voor één categorie.
     * @param computer De computer voor welke gekeken moet worden of deze aan de voorwaarden voldoet.
     * @param categoryId het ID van de categorie voor welke de controle uitgevoerd moet worden.
     * @returns {boolean} True als de computer voldoet aan de keuzen die binnen de categorie gemaakt zijn.
     */
    computerMatchesCategoryFilter = (computer, categoryId) => {
        const category = this.getCategory(categoryId);

        // Als geen opties geselecteerd zijn voldoet elke laptop.
        const selectedOptions = category.options.filter(o => o.checked);
        if (selectedOptions.length === 0) return true;

        // Als opties geselecteerd zijn mogen enkel de laptops die aan minstens één van de opties voldoen overblijven.
        return selectedOptions.find(o => o.id === computer.options[categoryId]) !== undefined;
    }

    /**
     * Geef alle catergorieen terug.
     * @returns {*}
     */
    getCategories = () => {
        return this.categories;
    }

    /**
     * Pas de checked variabele aan voor een specifieke optie binnen een specifieke categorie.
     * @param categoryId Het ID van de categorie waartoe de optie behoord.
     * @param optionId Het ID van de optie.
     */
    toggleOptionSelected = (categoryId, optionId) => {
        console.log(categoryId);
        console.log(optionId);
        console.log(this.categories);
        this.categories
            .find(c => c.id === categoryId)
            .options
            .forEach(o => {
                if (o.id === optionId) o.checked = !o.checked
            });
        localStorage.categories = JSON.stringify(this.categories);
    }

    /**
     * Verwijder alle aanpassingen aan de categorieen en computers.
     * Computers worden opnieuw gegenereerd.
     */
    reset = () => {
        this.categories = categories;
        this.computers = this.generateComputers(150);
        localStorage.categories = JSON.stringify(this.categories);
        localStorage.computers = JSON.stringify(this.computers);
    }

    /**
     * Geef één categorie terug.
     * @param categoryId Het id waaraan de categorie moet voldoen.
     * @returns {*}
     */
    getCategory = (categoryId) => {
        return this.categories.find(c => c.id === categoryId);
    }

    /**
     * Genereer een aantal computers. De structuur van een computer object is:
     * {
     *     price: this.getRndFloat(300, 3000),
     *     name: de naam van de computer,
     *     options: {
     *          categoryId1: optionId,
     *          categoryId3: optionId,
     *          ...
     *          categoryId{categories.length}: optionId,
     *     ],
     *     info: korte tekst met main features,
     *     id: het id van de computer
     * }
     * @param nb Het aantal computer om te generen.
     * @returns {[]}
     */
    generateComputers = (nb = 200) => {
        const computers = [];
        for (let i = 0; i < nb; i++) {
            const computer = {options: {}};
            const info = [];
            for (const c of this.categories) {
                const chosen = c.options[Math.floor(Math.random() * c.options.length)];
                computer.options[c.id] = chosen.id;
                if (c.inQuickInfo) {
                    info.push(chosen.name);
                }
                if (c.name === "Merk") {
                    computer.name = chosen.name + " " + this.randomString(10);
                }
            }
            computer.price = this.getRndFloat(300, 3000);
            computer.info = info.join(' | ');
            computer.id = uuidv4();
            computers.push(computer);
        }
        return computers;
    }

    /**
     * Genereer een willekeurig getal tussen min en max afgerond tot een geheel getal.
     * @param min Ondergrens
     * @param max Bovengrens
     * @returns {number}
     */
    getRndFloat = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
    }

    randomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    getComputer = (computerId) => {
        return this.computers.find(c => c.id === computerId);
    }

    getCategoryName = (categoryId) => {
        return this.categories.find(c => c.id === categoryId).name;
    }

    getCategoryValue = (categoryId, optionId) => {
        return this.categories.find(c => c.id === categoryId).options.find(o => o.id === optionId).name;
    }
}
