<template>
    <div>
        <div class="home-title-container">
            <div class="title-div">
                <h1 class="jaro-title">PEOPLE'S REPUBLIC OF MARTIN</h1>
                <img src="/public/flag.png" alt="The flag of the People's Republic of Martin" class="flag-png">
                <p class="fmc">Friends, Martins, Countrymen!</p>
            </div>
            <p>
                The People's Republic of Martin is a legal micronation established in the field of Martingrove Collegiate
                Institute during the 2024 Relay for Life event on May 22nd, 2024. The current leading party is the Founding Party, who will
                be hosting the first election.
            </p>
            <p>
                The nation itself is split into four counties, Lectus, where loungers and citizens can be found, the Soapbox county, where elections, events,
                and announcements take place, Zelt, for those who need a rest, and Gǔlǎo de Mén, the border county.
            </p>
            <p>
                Keep posted to the website for updates on our nation as the day progresses.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap');
.jaro-title {
    font-family: "Jaro", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem;
    text-align: center;
    padding: 0;
    margin-bottom: 0;
}

p {
    font-family: "Archivo", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 1.5rem;
    text-align: center;
}

.home-title-container {
    width: 60%;
    margin: 0 auto;
    gap: 0;
    display: flex;
    flex-direction: column;
}

.title-div {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.fmc {
    padding: 0;
    margin: 0;
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 100;
    font-style: oblique;
}
.flag-png {
    height: 400px;
    width: 800px;
}



@media (max-width: 768px) {
    .home-title-container {
        width: 90%;
    }

    .jaro-title {
        font-size: 3rem;
    }

    p {
        font-size: 1.2rem;
    }

    .flag-png {
        height: 300px;
        width: 600px;
    }

}

@media (max-width: 480px) {

    .flag-png {
        height: 200px;
        width: 400px;
    }
}

</style>