import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import View from "./View";

/* Providing the store the State and Dispatch */

/* Adding to the State */
mapStateToProps = state => {
  return {};
};

/* Actions to add */
mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

/* 
    Exporting our state and action and allowing
    the View file to have access to them
*/
export default connect(mapStateToProps, mapDispatchToProps)(View);
