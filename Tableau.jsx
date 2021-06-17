
let tabProd = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

class Tableau extends React.Component {
    renvoisRayons() {
        let distinctRayons = tabProd.filter((ligne, indice, tableau) => {
            return tableau.findIndex((elem) => elem.category === ligne.category) === indice
        })
        console.log(tabProd)
        console.log(distinctRayons)
        return distinctRayons
    }
    renvoisProdRayon(nomRayon) {
        let produitRayon = tabProd.filter((ligne, indice, tableau) => {
            return ligne.category === nomRayon
        })
        return produitRayon
    }
    affligne(data, key) {
        return (
            <tr key={key}>
                <td>
                    {data.name}
                </td>
                <td>
                    {data.price}
                </td>
            </tr>
        )
    }
    parcourTab() {
        let ret = []
        for (let i in tabProd) {
            ret.push(this.affligne(tabProd[i]))
        }
        return ret
    }
    render() {
        let rayons = this.renvoisRayons()
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>

                {rayons.map((ligne, key) => {
                    return <Rayon categ={ligne.category} key={key} tabProdRayon={this.renvoisProdRayon(ligne.category)}></Rayon>
                })}

            </table>
        )
    }
}

class Rayon extends React.Component {
    render() {
        return (
            <tbody key={this.props.key}>
                <tr>
                    <td colSpan="2">
                        {this.props.categ}
                    </td>
                </tr>
                {this.props.tabProdRayon.map((ligne) => {
                    return (
                        <tr>
                            <td>
                                {ligne.name}
                            </td>
                            <td>
                                {ligne.price}
                            </td>
                        </tr>
                    )
                })}

            </tbody>

        )
    }
}
let texte = <Tableau />

ReactDOM.render(texte, document.getElementById("app"))