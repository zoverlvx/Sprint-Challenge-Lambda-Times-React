import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
	this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState({selected: tab})
  };

  filterCards = () => {
	const cards = 
		this.state.selected !== "all" 
		? this.state.cards.filter(
			card => card.tab === this.state.selected
		) 
		: this.state.cards;
	return cards;
  };

  render() {
	
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
			tabs={this.state.tabs} 
			selectedTab={this.state.selected} 
			selectTabHandler={this.changeSelected}
		/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
