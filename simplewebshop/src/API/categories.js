import {v4 as uuidv4} from 'uuid';

const categories = [
    {
        inQuickInfo: true,
        name: "Schermdiagonaal",
        id: uuidv4(), options: [
            {
                name: "10 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "11 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "12 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "13 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "14 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "15 inch",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "16 inch",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "17 inch",
                id: uuidv4(),
                checked: false, recommended: false
            }
        ]
    },
    {
        inQuickInfo: true,
        name: "Processor",
        id: uuidv4(), options: [
            {
                name: "AMD Ryzen 3",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "AMD Ryzen 5",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "AMD Ryzen 7",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "AMD Ryzen 9",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Intel Celeron",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Intel Core i3",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Intel Core i5",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "Intel Core i7",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Intel Core i9",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Merk",
        id: uuidv4(), options: [
            {
                name: "Acer",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Apple",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Asus",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "HP",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Lenovo",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "MSI",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Microsoft",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: true,
        name: "Werkgeheugen",
        id: uuidv4(), options: [
            {
                name: "4 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "8 GB",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "16 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "32 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "64 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Opslagcapaciteit",
        id: uuidv4(), options: [
            {
                name: "128 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "256 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "512 GB",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "1024 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "1128 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "1256 GB",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Type opslag",
        id: uuidv4(), options: [
            {
                name: "SSD (Sata)",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "HDD",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "SSD (Sata) + HDD",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVMe SSD",
                id: uuidv4(),
                checked: false, recommended: true
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Grafische kaart",
        id: uuidv4(), options: [
            {
                name: "NVIDIA GTX 1050",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1050 Ti",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1650",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1650 Ti",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1660",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1660 Ti",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1650",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA GTX 1650 Ti",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA RTX 2060",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA RTX 2070",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "NVIDIA RTX 3080",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Besturingssysteem",
        id: uuidv4(), options: [
            {
                name: "Windows",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "macOS",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Ubuntu",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    },
    {
        inQuickInfo: false,
        name: "Resolutie",
        id: uuidv4(), options: [
            {
                name: "Full HD (1080p)",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "HD Ready (720p)",
                id: uuidv4(),
                checked: false, recommended: false
            },
            {
                name: "Quad HD (1440p)",
                id: uuidv4(),
                checked: false, recommended: true
            },
            {
                name: "4K (UHD, 2160p)",
                id: uuidv4(),
                checked: false, recommended: false
            },
        ]
    }
];

export default categories;
