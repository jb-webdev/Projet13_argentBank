/**
    ok => L'utilisateur peut visiter la page d'accueil 
    ok => L'utilisateur peut se connecter au système
    ok => L'utilisateur peut se déconnecter du système
    ok => L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
    ok => L'utilisateur peut modifier le profil et conserver les données dans la base de données.

    Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

    - La méthode HTTP (ex. : GET, POST, etc.)
    - La route (ex. : /store/inventory)
    - La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
    - Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article spécifique à demander à la base de données d'inventaire).
    - Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint (ex. : 404 : réponse d'erreur d'article inconnu).

 */

import './App.css'
import NavBar from './components/navbar/index.js'
import AppRouter from './router/index.js'
import Footer from './components/footer/index.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
