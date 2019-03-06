import axios from "axios";

import BomLogo from "./BomLogo";

export default class extends React.Component {
  state = {
    categories: []
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://agency.raconteur.net/wp-json/wp/v2/categories"
    );

    this.setState({
      categories: res.data
    });
  }

  handleCategorySelection() {
    console.log(`selected category`);
  }

  render() {
    return (
      <div id="bom-header">
        <BomLogo />
        <div>
          <form>
            <select defaultValue="cat" onChange={this.handleCategorySelection}>
              <option value="cat">All Categories</option>
              {this.state.categories.map(cat => {
                return (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    );
  }
}
