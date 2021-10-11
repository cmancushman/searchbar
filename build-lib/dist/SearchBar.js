"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_animated_spinkit_1 = require("react-native-animated-spinkit");
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
/**
 * ? Local Imports
 */
const SearchBar_style_1 = tslib_1.__importStar(require("./SearchBar.style"));
const defaultSearchIcon = require("./local-assets/search-icon.png");
const whiteSearchIcon = require("./local-assets/search-icon-white.png");
const defaultClearIcon = require("./local-assets/clear-icon.png");
const whiteClearIcon = require("./local-assets/clear-icon-white.png");
class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.inputRef = null;
        this.handleSearchBarPress = () => {
            this.inputRef?.focus();
            this.props.onPress && this.props.onPress();
        };
        this.handleOnClearPress = () => {
            this.inputRef?.clear();
            this.props.onClearPress && this.props.onClearPress();
        };
        /* -------------------------------------------------------------------------- */
        /*                               Render Methods                               */
        /* -------------------------------------------------------------------------- */
        this.renderSpinner = () => {
            const { darkMode = false, spinnerSize = 15, SpinnerType = react_native_animated_spinkit_1.Circle, spinnerColor = darkMode ? "#fdfdfd" : "#19191a", spinnerVisibility = false, } = this.props;
            return (spinnerVisibility && (<react_native_1.View style={SearchBar_style_1.default.spinnerContainer}>
          <SpinnerType size={spinnerSize} color={spinnerColor}/>
        </react_native_1.View>));
        };
        this.renderSearchIcon = () => {
            const { onSearchPress, darkMode = false, searchIconComponent, searchIconImageStyle, ImageComponent = react_native_1.Image, searchIconImageSource = darkMode ? whiteSearchIcon : defaultSearchIcon, } = this.props;
            return (<react_native_bounceable_1.default bounceEffect={1} style={SearchBar_style_1.default.searchContainer} onPress={onSearchPress}>
        {searchIconComponent || (<ImageComponent resizeMode="contain" source={searchIconImageSource} style={[SearchBar_style_1.default.searchIconImageStyle, searchIconImageStyle]}/>)}
      </react_native_bounceable_1.default>);
        };
        this.renderTextInput = () => {
            const { onBlur, onFocus, textInputStyle, darkMode = false, placeholder = "Search here...", } = this.props;
            return (<react_native_1.TextInput placeholderTextColor={darkMode ? "#fdfdfd" : "#19191a"} {...this.props} onBlur={onBlur} onFocus={onFocus} ref={(ref) => (this.inputRef = ref)} style={[SearchBar_style_1._textInputStyle(darkMode), textInputStyle]} placeholder={placeholder}/>);
        };
        this.renderClearIcon = () => {
            const { darkMode = false, clearIconComponent, clearIconImageStyle, ImageComponent = react_native_1.Image, clearIconImageSource = darkMode ? whiteClearIcon : defaultClearIcon, } = this.props;
            return (<react_native_bounceable_1.default bounceEffect={1} style={SearchBar_style_1.default.clearIconContainer} onPress={this.handleOnClearPress}>
        {clearIconComponent || (<ImageComponent resizeMode="contain" source={clearIconImageSource} style={[SearchBar_style_1.default.clearIconImageStyle, clearIconImageStyle]}/>)}
      </react_native_bounceable_1.default>);
        };
    }
    render() {
        const { style, darkMode = false, spinnerVisibility } = this.props;
        return (<react_native_bounceable_1.default {...this.props} bounceEffect={1} style={[SearchBar_style_1._container(darkMode), style]} onPress={this.handleSearchBarPress}>
        {spinnerVisibility ? this.renderSpinner() : this.renderSearchIcon()}
        {this.renderTextInput()}
        {this.renderClearIcon()}
      </react_native_bounceable_1.default>);
    }
}
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map