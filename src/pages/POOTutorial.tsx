
import { ArrowLeft } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl font-bold mb-4">
              Bienvenue dans le tutoriel POO
            </h2>
            <p className="text-gray-600 mb-6">
              Ce tutoriel vous guidera à travers les concepts fondamentaux de la Programmation Orientée Objet.
            </p>
            
            <div className="bg-primary/50 rounded-xl p-6 mb-8">
              <h3 className="font-display text-xl font-bold mb-4">
                Objectifs d'apprentissage
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  Comprendre les concepts de base de la POO
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  Maîtriser les classes et les objets
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                  Apprendre l'héritage et le polymorphisme
                </li>
              </ul>
            </div>

            {/* Tutorial sections placeholder - to be filled with actual content */}
            <div className="space-y-8">
              <div className="border-b pb-8">
                <h3 className="font-display text-xl font-bold mb-4">
                  1. Introduction aux Classes
                </h3>
                <p className="text-gray-600">
                  Contenu du tutoriel à venir...
                </p>
              </div>
              
              <div className="border-b pb-8">
                <h3 className="font-display text-xl font-bold mb-4">
                  2. Objets et Instances
                </h3>
                <p className="text-gray-600">
                  Contenu du tutoriel à venir...
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold mb-4">
                  3. Héritage et Polymorphisme
                </h3>
                <p className="text-gray-600">
                  Contenu du tutoriel à venir...
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
