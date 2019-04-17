const tags = [
    {
        name: 'friends',
        value: 'Entre amis',
    },{
        name: "daily",
        value: "Au quotidien",
    },{
        name: 'apero',
        value: 'Apéro',
    },{
        name: 'bigDeal',
        value: "Grande Occasion",
    },{
        name: 'redMeat',
        value: 'Viande rouge',
    },{
        name: 'whiteMeat',
        value: 'Viande blanche',
    },{
        name: 'seafood',
        value: 'Poisson / Fruits de mer',
    },{
        name: 'delicatessen',
        value: 'Charcuterie',
    },{
        name: "cheese",
        value: "Fromage",
    },{
        name: 'afters',
        value: 'Dessert / sucré',
    },{
        name: 'vegan',
        value: 'Végan',
    },{
        name: 'less10',
        value: 'Moins de 10€',
    },{
        name: 'less20',
        value: 'Moins de 20€',
    },{
        name: 'less30',
        value: 'Moins de 30€',
    },{
        name: 'more30',
        value: 'Plus de 30€',
    },{
        name: 'fruity',
        value: 'Fruité',
    },{
        name: 'wooded',
        value: 'Boisé',
    },{
        name: 'dry',
        value: 'Sec',
    },{
        name: 'tannic',
        value: 'Tannique',
    },{
        name: 'idk',
        value: 'Je ne sais pas',
    }
 ];

export default function(tag) {
    const findTag = tags.find(t => t.name === tag);
    return findTag && findTag.value;
}