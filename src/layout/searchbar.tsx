import { Dropdown, Form } from "react-bootstrap"

type SearchBarProps = {}

function SearchBar({ }: SearchBarProps) {
  return (
    <div className="searchbar">
      {/* <input type="search" name="search" id="serach" /> */}
      <Form>
        <Form.Control
          type="text"
          aria-describedby="search_topic"
        />
        <Form.Text id="search_topic" placeholder="Search for a country"></Form.Text>
      </Form>
      <Dropdown className="searchbar__dropdown">
        <Dropdown.Toggle
          style={{
            backgroundColor: 'transparent',
            color: 'currentcolor',
            borderColor: 'transparent',
            boxShadow: '0px 3px 15px 0px rgba(0, 0, 0, .45)'
          }}
          className="searchbar__toggle"
        >
          Filter by Region
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Option 1</Dropdown.Item>
          <Dropdown.Item>Option 2</Dropdown.Item>
          <Dropdown.Item>Option 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default SearchBar