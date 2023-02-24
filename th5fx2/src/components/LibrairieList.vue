<script setup>
import { reactive, onMounted } from "vue";
import Livre from "../Livre.js";
import LibrarieForm from "./LibrairieForm.vue";
import LibrairieListItem from "./LibrairieListItem.vue";
import LibrairieHeader from "./LibrairieHeader.vue";
import ChercherLivre from "./ChercherLivre.vue";
import ListLivres from "./ListLivres.vue";

//import Routeur from "vue-router";

const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/13/livres";
const listeLivres = reactive([]);

console.log(listeLivres);

function getLivre() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeLivres.splice(0, listeLivres.length);
      dataJSON.forEach((v) => {
        listeLivres.push(new Livre(v.id, v.titre, v.qtestock, v.prix));
        console.log(listeLivres);
      });
      console.log(listeLivres);
    })
    .catch((error) => console.log(error));
}
onMounted(() => {
  getLivre();
});

function getLivreMotcle(motcle) {
  const url2 =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/13/livres?search=" +
    motcle;
  const fetchOptions = { method: "GET" };
  fetch(url2, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeLivres.splice(0, listeLivres.length);
      dataJSON.forEach((v) => {
        listeLivres.push(new Livre(v.id, v.titre, v.qtestock, v.prix));
        console.log(listeLivres);
      });
      console.log(listeLivres);
    })
    .catch((error) => console.log(error));
}

function addLivre(newLivre) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  console.log(JSON.stringify({ ...newLivre }));
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ ...newLivre }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      getLivre();
    })
    .catch((error) => console.log(error));
}

function deleteLivre(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}

function AugmenterQte(Livre) {
  Livre.pourAugmenter();
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({ Livre }),
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}
function DiminuerQte(Livre) {
  if (Livre.qtestock > 1) {
    Livre.pourDiminuer();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({ Livre }),
    };
    // -- l'id de la chose à supprimer doit être
    //  ajouté à la fin de l'url
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivre();
      })
      .catch((error) => console.log(error));
  } else {
    deleteLivre(Livre.id);
  }
}
</script>

<template>
  <LibrairieHeader />
  <LibrarieForm @ajouter="addLivre" />
  <h2>Liste des livres</h2>
  <ChercherLivre @chercherLivre="getLivreMotcle" />
  <div class="container">
    <div class="livres">
      <ListLivres
        v-for="Livre of listeLivres"
        :key="Livre.id"
        :Livre="Livre"
        @deletelivre="deleteLivre(Livre.id)"
        @augmenterQte="AugmenterQte"
        @diminuerQte="DiminuerQte"
      />
    </div>
  </div>
</template>

<style>
.livres {
  align-items: center;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  width: 800px;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
}
h2 {
  text-align: center;
  margin-top: 100px;
  color: black;
}
#formulaire {
  width: 30%;
  height: 25px;
  border: thin;
  border-radius: 10px;
}
button {
  height: 30px;
  width: 20;
  background-color: rgb(231, 185, 185);
  border: thin;
  border-radius: 10px;
}
@media screen and (max-width: 480px) {
  .livres {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 400px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 400px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>



