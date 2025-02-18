
import { ArrowLeft, Star, Code2, Boxes, Play, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const FPTutorial = () => {
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
            Tutoriel Programmation Fonctionnelle
          </h1>
          <p className="text-lg text-gray-600">
            Découvrez une approche élégante de la programmation
          </p>
        </div>

        {/* Tutorial Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Qu'est-ce que la Programmation Fonctionnelle ?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              La Programmation Fonctionnelle (PF) est une approche qui se concentre sur les fonctions et 
              les transformations de données. Imaginez une chaîne de montage où chaque étape (fonction) 
              transforme le produit jusqu'au résultat final !
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Fonctions Pures</h3>
                <p className="text-gray-600">
                  Des fonctions qui donnent toujours le même résultat pour les mêmes entrées
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Données Immuables</h3>
                <p className="text-gray-600">
                  Les données ne changent pas, on crée de nouvelles versions
                </p>
              </div>
            </div>
          </div>

          {/* La Métaphore de la Chaîne de Montage */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              La PF expliquée avec une chaîne de montage 🏭
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">Les Fonctions : Les Machines</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chaque fonction est comme une machine dans une usine : elle reçoit une entrée, 
                    la transforme d'une manière spécifique, et produit une sortie. Ces machines 
                    peuvent être assemblées pour créer des chaînes de production complexes !
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Code Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Un exemple concret avec des nombres 🔢
            </h2>
            <div className="bg-gray-900 rounded-xl p-6 mb-6">
              <pre className="text-white overflow-x-auto">
                <code>{`# Une liste de nombres
nombres = [1, 2, 3, 4, 5]

# Une fonction pure qui double un nombre
def doubler(x):
    return x * 2

# Une fonction pure qui vérifie si un nombre est pair
def est_pair(x):
    return x % 2 == 0

# Utilisation de la programmation fonctionnelle
nombres_pairs = filter(est_pair, nombres)     # Filtrer les pairs
nombres_doubles = map(doubler, nombres_pairs) # Doubler les pairs
resultat = list(nombres_doubles)              # Convertir en liste

print(resultat)  # Affiche : [4, 8]`}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Les principes clés illustrés :</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Les fonctions <code className="bg-gray-100 px-2 py-1 rounded">doubler</code> et <code className="bg-gray-100 px-2 py-1 rounded">est_pair</code> sont pures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Les données originales ne sont jamais modifiées</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span>Les fonctions sont combinées (<code className="bg-gray-100 px-2 py-1 rounded">filter</code> et <code className="bg-gray-100 px-2 py-1 rounded">map</code>)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6">
              Pourquoi utiliser la Programmation Fonctionnelle ?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Prévisible</h3>
                <p className="text-gray-600">
                  Les fonctions pures donnent toujours le même résultat
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Testable</h3>
                <p className="text-gray-600">
                  Facile à tester car les fonctions sont isolées
                </p>
              </div>
              <div className="bg-primary/30 rounded-xl p-6">
                <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Boxes className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Réutilisable</h3>
                <p className="text-gray-600">
                  Les fonctions peuvent être réutilisées facilement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FPTutorial;
