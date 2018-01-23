require 'rails_helper'

feature 'user views list of threads' do
  let(:thread_1) { FactoryBot.create(:thread) }
  scenario 'user visits index page and sees list of threads' do
    visit threads_path

    expect(page).to have_content('Ferox Forum')
    expect(page).to have_content('First post')
    expect(page).to have_content('Add New Thread')

  end
end

feature 'user views thread details' do
  let(:thread_1) { FactoryBot.create(:thread) }
  let(:thread_2) { FactoryBot.create(:thread, title: 'Going to Tahoe') }
  scenario 'user clicks on a thread and views its details' do
    visit threads_path

    click 'First post'

    expect(page).to have_content('First post')
    expect(page).to have_content('I am planning a trip to Tahoe')
    expect(page).to have_content('Comments')
    expect(page).to have_content('Add Comment')
    expect(page).to_not have_content('Going to Tahoe')
  end
end
