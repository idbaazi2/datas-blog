import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    // 1. LE GLOSSAIRE
    glossaire: collection({
      label: 'Glossaire Data',
      slugField: 'term',
      path: 'src/content/glossaire/*',
      format: { data: 'json' }, 
      schema: {
        term: fields.slug({ name: { label: 'Nom du Terme' } }),
        definition: fields.text({ label: 'Définition', multiline: true }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Data Engineering', value: 'Data Engineering' },
            { label: 'Cloud Architecture', value: 'Cloud Architecture' },
            { label: 'Concepts Fondamentaux', value: 'Concepts Fondamentaux' },
            { label: 'Intelligence Artificielle', value: 'IA & Machine Learning' }
          ],
          defaultValue: 'Concepts Fondamentaux'
        }),
      },
    }),

    // 2. LES OUTILS (L'Annuaire)
    outils: collection({
      label: 'Outils Data',
      slugField: 'name',
      path: 'src/content/outils/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nom de l\'Outil' } }),
        description: fields.text({ label: 'Description de ce qu\'il fait', multiline: true }),
        category: fields.select({
          label: 'Catégorie',
          options: [
            { label: 'Ingestion', value: 'Ingestion' },
            { label: 'Transformation', value: 'Transformation' },
            { label: 'Stockage Cloud (DWH)', value: 'Stockage Cloud (DWH)' },
            { label: 'Visualisation (BI)', value: 'Visualisation (BI)' },
            { label: 'Orchestration', value: 'Orchestration' }
          ],
          defaultValue: 'Transformation'
        }),
        type: fields.text({ label: 'Type (ex: Open Source, SaaS...)' }),
        pricing: fields.text({ label: 'Modèle de prix (ex: Pay-as-you-go, Gratuit)' }),
        url: fields.url({ label: 'Lien vers le site officiel' }),
      },
    }),

    // 3. LES TUTORIELS (La page d'accueil)
    tutoriels: collection({
      label: 'Tutoriels & Articles',
      slugField: 'title',
      path: 'src/content/tutoriels/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre du Tutoriel' } }),
        summary: fields.text({ label: 'Résumé de l\'article', multiline: true }),
        category: fields.select({
          label: 'Catégorie Technique',
          options: [
            { label: 'Business Intelligence', value: 'bi' },
            { label: 'Data Engineering', value: 'engineering' },
            { label: 'Architecture & Cloud', value: 'cloud' },
            { label: 'IA & Machine Learning', value: 'ai' },
            { label: 'Gouvernance', value: 'gouvernance' }
          ],
          defaultValue: 'engineering'
        }),
        categoryLabel: fields.text({ label: 'Libellé d\'affichage (ex: Ingénierie)' }),
        tags: fields.array(
          fields.text({ label: 'Nom du Tag' }),
          { label: 'Tags (Mots-clés)', itemLabel: props => props.value }
        ),
        date: fields.date({ label: 'Date de publication' }),
        level: fields.select({
          label: 'Niveau de difficulté',
          options: [
            { label: 'Débutant', value: 'Débutant' },
            { label: 'Intermédiaire', value: 'Intermédiaire' },
            { label: 'Avancé', value: 'Avancé' }
          ],
          defaultValue: 'Débutant'
        }),
        time: fields.text({ label: 'Temps de lecture estimé (ex: 10 min)' }),
        source: fields.text({ label: 'Auteur / Source (ex: dbt Labs, Datas.ma)' }),
        url: fields.url({ label: 'Lien vers l\'article' }),
      },
    }),
  },
});
