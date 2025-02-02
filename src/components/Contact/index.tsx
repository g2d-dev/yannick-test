const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contactez-nous</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Nous sommes là pour répondre à toutes vos questions et vous aider au mieux.
          </p>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">Envoyez-nous un message</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Nom complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Votre nom" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Votre email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="Votre message"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">Envoyer</button>
              </form>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-6">Nos Coordonnées</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">📍 Adresse : près du collége delasalle, Douala, Cameroun</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">📧 Email : support@g2d.com</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">📞 Téléphone : +237 6 95 75 97 31</p>
              <p className="text-gray-600 dark:text-gray-300">🕒 Horaires : Lundi - Vendredi, 8h30 - 17h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;