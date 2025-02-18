
import { ArrowLeft, Star, Code2, Boxes, Play, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const POOTutorial = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Tutorial Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            Tutoriel POO
          </h1>
          <p className="text-lg text-gray-600">
            Introduction à la Programmation Orientée Objet
          </p>
        </div>

        {/* Tutorial Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Qu'est-ce que la Programmation Orientée Objet ?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La Programmation Orientée Objet (POO) est une approche de programmation inspirée du monde réel. 
              Imaginez que vous construisez un univers numérique où chaque élément est un objet avec ses propres 
              caractéristiques et actions, comme dans la vie réelle !
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Caractéristiques</h3>
                <p className="text-gray-600">
                  Ce que l'objet est et possède (attributs)
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Actions</h3>
                <p className="text-gray-600">
                  Ce que l'objet peut faire (méthodes)
                </p>
              </div>
            </div>
          </div>

          {/* La Métaphore du Gâteau */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              La POO expliquée avec des gâteaux 🍰
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Les Classes : La Recette</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Une classe est comme une recette de gâteau. Elle contient toutes les instructions 
                    et les ingrédients nécessaires. Dans le code, c'est un modèle qui définit les 
                    caractéristiques (attributs) et les actions (méthodes) que les objets auront.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Boxes className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Les Objets : Les Gâteaux</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Les objets sont comme les gâteaux que vous créez en suivant la recette. 
                    Chaque gâteau est unique mais suit le même modèle. Par exemple, vous pouvez 
                    créer plusieurs chats avec des couleurs différentes à partir de la même classe Chat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Code Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Un exemple concret avec des chats 🐱
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <pre className="text-white overflow-x-auto">
                <code>{`# La classe (la recette)
class Chat:
    def __init__(self, nom, couleur):
        self.nom = nom        # Attribut : le nom du chat
        self.couleur = couleur  # Attribut : la couleur du chat
    
    def miauler(self):       # Méthode : ce que le chat peut faire
        print(f"{self.nom} dit : Miaou !")

# Création d'objets (les gâteaux)
minou = Chat("Minou", "noir")
snow = Chat("Snow", "blanc")

# Utilisation des objets
minou.miauler()  # Minou dit : Miaou !
snow.miauler()   # Snow dit : Miaou !`}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Explication du code :</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>La classe <code className="bg-gray-100 px-2 py-1 rounded">Chat</code> définit le modèle pour créer des chats</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Les attributs <code className="bg-gray-100 px-2 py-1 rounded">nom</code> et <code className="bg-gray-100 px-2 py-1 rounded">couleur</code> sont les caractéristiques du chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>La méthode <code className="bg-gray-100 px-2 py-1 rounded">miauler()</code> est une action que le chat peut effectuer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Pourquoi utiliser la POO ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Réutilisable</h3>
                <p className="text-gray-600">
                  Créez autant d'objets que vous voulez à partir d'une seule classe
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Organisé</h3>
                <p className="text-gray-600">
                  Le code est structuré autour d'objets logiques et cohérents
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Maintenable</h3>
                <p className="text-gray-600">
                  Facile à modifier et à faire évoluer dans le temps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POOTutorial;
