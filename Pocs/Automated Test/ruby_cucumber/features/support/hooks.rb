Before do
    puts 'executando antes de cada cenário'
end

After do
    puts 'executando depois de cada cenário'
end

Before '@tag_comeco' do
    puts 'tag de começo'
end