import { connect } from "react-redux";
import { fetchStationList } from "redux/actions/widget";

const mapStateToProps = (state) => ({
  stationList: state.widget.stationList,
});

const mapDispatchToProps = {
  fetchStationList,
};

export default function connectWidget(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
