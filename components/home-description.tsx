export default function HomeDescription() {
    return (
      <div className='generic-shadow-container' style={{"alignItems": "center"}}>
        <div style={{"width": "100%"}}>
          <h1 className="container-title">Welcome to Genshin Stove!</h1>
        </div>
        <p className='app-description' style={{"marginBottom": "2rem"}}>
          This is a place where you can test out characters and rotations using custom builds and loadouts and compare their damage in different teams.
          Genshin Stove provides you the tools to theorycraft and optimize your team compositions and rotations to maximize your damage output or to
          just test out wild ideas you have in your mind. Genshin Stove allows to set up rotations for all of your team members (not only for a single character)
          and check out their damage output over time.
        </p>
        <div className='primary-light-container'>
          <span className='app-description' style={{"textAlign": "center", "color": "#2d3250"}}>
            <b>So tell me, what are you cooking today?</b>
          </span>
        </div>
      </div>
    )
}