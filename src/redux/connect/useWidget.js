import { connect } from "react-redux";
import { getFMList } from "../actions/widget";

const mapStateToProps = (state) => ({
  fmList: state.widget.fmList,
});

const mapDispatchToProps = {
  getFMList,
};

export default function connectWidget(Component) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}
