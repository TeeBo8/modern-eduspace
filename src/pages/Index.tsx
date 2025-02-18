
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star, GraduationCap, Code2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-white py-20 sm:py-32">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-up">
              Maîtrisez la Programmation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Découvrez l'Algorithmique et l'Architecture MVC à travers des tutoriels interactifs
            </p>
            <Link
              to="/poo-tutorial"
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors animate-fade-up shadow-lg hover:shadow-xl"
              style={{ animationDelay: '0.2s' }}
            >
              Commencer Gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up">
              <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Algorithmique</h3>
              <p className="text-gray-600">
                Apprenez les fondamentaux de l'algorithmique et de la logique de programmation à travers des exercices pratiques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Architecture MVC</h3>
              <p className="text-gray-600">
                Découvrez les principes de l'architecture MVC et comment structurer vos applications efficacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Nos Formations</h2>
            <p className="text-gray-600">
              Des tutoriels interactifs pour tous les niveaux
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link
              to="/poo-tutorial"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 bg-primary rounded-xl mb-6 flex items-center justify-center">
                <GraduationCap className="h-16 w-16 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Tutoriel POO</h3>
              <p className="text-gray-600 mb-4">
                Introduction à la Programmation Orientée Objet.
              </p>
              <span className="text-accent font-medium inline-flex items-center">
                Commencer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/fp-tutorial"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="h-48 bg-primary rounded-xl mb-6 flex items-center justify-center">
                <Code2 className="h-16 w-16 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Tutoriel PF</h3>
              <p className="text-gray-600 mb-4">
                Découvrez la Programmation Fonctionnelle.
              </p>
              <span className="text-accent font-medium inline-flex items-center">
                Commencer
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Placeholder card for future course */}
            <div className="bg-white/50 rounded-2xl p-6 shadow border-2 border-dashed border-gray-200">
              <div className="h-48 bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-400">Bientôt disponible</span>
              </div>
              <div className="h-6 w-2/3 bg-gray-100 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Prêt à commencer votre voyage ?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté d'apprenants et commencez votre parcours dans la programmation dès aujourd'hui.
            </p>
            <Link
              to="/poo-tutorial"
              className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Commencer Gratuitement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
