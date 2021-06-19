import { connect } from "react-redux";
import { fetchstationList } from "../actions/widget";

const mapStateToProps = (state) => ({
  stationList: state.widget.stationList,
});

const mapDispatchToProps = {
  fetchstationList,
};

export default function connectWidget(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
