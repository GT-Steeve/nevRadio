# NevRadio

**Version actuelle : v1.11.0** — [voir le site](https://gt-steeve.github.io/nevRadio/) · historique dans `patchNote.txt`

Lecteur de musique interactif inspiré de l'esthétique Ren'Py (visual novel). Interface sombre à deux panneaux, support YouTube, SoundCloud et fichiers audio directs.

---

## Aperçu

| Panneau gauche | Panneau droit |
|----------------|---------------|
| Pochette de catégorie | Lecteur YouTube / SoundCloud |
| Bouton « Sélectionner une catégorie » | Contrôles de volume (SoundCloud) |
| Liste des pistes (tri alphabétique) | — |

---

## Sélection de catégorie

Le bandeau coloré sous la pochette ouvre une fenêtre de sélection sous forme de cartes :

- **Mode Texte** (par défaut) : cartes avec le nom et le nombre de pistes
- **Mode Images** : cartes avec la pochette de chaque catégorie
- Barre de **recherche** pour filtrer les catégories
- Fermeture avec `✕`, `Échap` ou un clic en dehors

Le mode choisi est mémorisé dans le navigateur.

---

## Ajouter une musique

Ouvre `asset/js/app.js` et ajoute une piste dans la catégorie souhaitée :

```js
{ title: "Nom de la piste", url: "TON_LIEN_ICI" }
```

Les pistes sont **triées automatiquement par ordre alphabétique** au chargement.

### Types d'URL supportés

| Source | Comportement |
|--------|-------------|
| `youtube.com` / `youtu.be` | Lecteur YouTube intégré (iframe) |
| `soundcloud.com` | Widget SoundCloud + contrôles volume |
| Lien direct `.mp3`, `.ogg`… | Balise `<audio>` native avec auto-avance |

---

## Ajouter une catégorie

Dans `asset/js/app.js`, ajoute un bloc dans le tableau `CATEGORIES` :

```js
{
  name: "Nom de la catégorie",
  cover: "URL_IMAGE_POCHETTE",   // laisser "" pour la pochette par défaut
  tracks: [
    { title: "Piste 1", url: "URL" },
    { title: "Piste 2", url: "URL" },
  ]
},
```

Si `cover` est vide ou si l'image ne se charge pas, la pochette par défaut `asset/img/default-cover.svg` est utilisée.

### Version

À chaque mise à jour, modifier la constante `VERSION` en haut de `asset/js/app.js` et ajouter une ligne dans `patchNote.txt`.

---

## Contrôles volume SoundCloud

Affichés en haut du lecteur uniquement lors de la lecture d'une piste SoundCloud.

| Bouton | Action |
|--------|--------|
| `−` | Baisser le volume (−10) |
| `🔊 / 🔉 / 🔈 / 🔇` | Toggle muet / rétablir le son |
| `+` | Monter le volume (+10) |

---

## Responsive

| Largeur | Layout |
|---------|--------|
| > 900px | Deux colonnes — panneau gauche 290px |
| ≤ 900px | Deux colonnes — panneau gauche 220px |
| ≤ 600px | Empilement vertical — pochette compacte, liste scrollable, barre de lecture fixe en bas (la liste s'arrête au-dessus), sélecteur de catégorie en plein écran |