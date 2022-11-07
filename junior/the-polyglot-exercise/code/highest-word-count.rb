# Write a function that given a string returns an array containing
# the most frequent word in it. If the top frequency is shared by more than
# one word, the array will contain all of them (the order is not relevant).
# Your implementation should exclude anything that is not a word
# (e.g. punctuation and numbers)
# If the input is an empty string, return an empty array.
# If the input is not a string, an error should be thrown.
# TIP: You'll need to use a regex.



def most_word ( str )

    return [] if not str
    raise Exception.new "Input is not a string" if not str.is_a? String

    words = str.downcase.gsub(/[[:punct:]]/, '').split(' ')

    count = words.inject(Hash.new(0)) {|h,i| h[i] += 1; h }

    max = count.max_by{|k,v| v}[1]

    ret = []
    count.each do |k, v|
        ret.append(k) if v == max
    end

    return ret

end

print most_word ("Hello, world!  This world is amazing! ..   And saying hello is important!!!")