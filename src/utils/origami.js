const getOrigami = async (ength) => {       // ако решим да лимитираме тук
    const promise = await fetch("http://localhost:9999/api/origami/")    // за лимитиране от бекенда логиката е там, а тук: `http://localhost:9999/api/origami/?lengh=${length}`
    const origamis = await promise.json();
    return origamis;
}

export default getOrigami;