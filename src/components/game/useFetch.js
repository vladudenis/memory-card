import axios from "axios";

export const useMyFetch = async (level) => {
    const champions = [];

    // API key: RGAPI-2d51cec6-db62-4dfa-b01f-74ff53162b0c
    
    for(let i = 0; i < level + 4; i++){
        const championUrl = "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/Aatrox.json";
        const champion = await axios.get(championUrl);
        console.log(champion);
        const image = champion.img.full;
        const name = champion.name;
        const id = champion.id;
        champions.push({ image, name, id });
    }

    return champions;
};