import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Content, Title, Card, Grid, Numbers, NewButton } from 'components'
import { register, configureStore } from 'core'
import { GlobalStyles, theme } from 'styles'

const { persistor, store } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Content>
            <Title>Sudoku</Title>
            <Card>
              <NewButton />
              <Grid />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

register()
