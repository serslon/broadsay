import { connect } from "react-redux";
import _get from "lodash/get";

const mapStateToProps = state => ({
  initialValues: _get(state, "appRedux.data", {}),
  imagePreview: _get(state, "form.playerForm.values.picture.large", "")
});

export default connect(mapStateToProps);
