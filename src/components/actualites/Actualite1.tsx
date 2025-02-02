import React from 'react';
import ReactMarkdown from 'react-markdown';

// Contenu Markdown
const markdownContent = `
# 📰 Actualités Informatique

Découvrez les dernières tendances et innovations dans le monde de l'informatique.

## 🚀 Intelligence Artificielle
L'IA révolutionne de nombreux secteurs, de la santé à la finance, en passant par l'éducation.

## 🔒 Cybersécurité
Les cyberattaques sont de plus en plus sophistiquées. Découvrez comment protéger vos données et infrastructures.

## ☁️ Cloud Computing
Les solutions cloud permettent aux entreprises de gagner en flexibilité et en sécurité.

## 🖥️ Matériel & Logiciels
Les nouvelles générations de processeurs et logiciels boostent les performances et l'efficacité.
`;

const Actualite1 = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <ReactMarkdown className="prose dark:prose-invert">{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Actualite1;
