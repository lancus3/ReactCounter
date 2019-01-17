var Counters = React.createClass({
        render:function() {
            return React.createElement('div', {},
                React.createElement('div', {id:'counter1'}, React.createElement(Counter, {})),
                React.createElement('div', {id:'counter2'}, React.createElement(Counter, {})),
                React.createElement('div', {id:'counter3'}, React.createElement(Counter, {}))
            )
        }
})

var Counter = React.createClass({
    getInitialState: function() {

        return {
            counter: 0
        };
    },
    componentDidMount: function(){
        console.log("Na starcie: " + this.state.counter);
   
    },
    componentDidUpdate: function(){
        console.log("Po aktualizacji" + this.state.counter);
   
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button',{onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')

        );
    }
});


var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));